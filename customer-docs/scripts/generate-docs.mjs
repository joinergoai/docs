import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const docsRoot = path.join(repoRoot, "customer-docs");
const inventoryPath = path.join(docsRoot, "ergo-customer-user-docs-inventory.md");

const categoryDirs = {
  "Start and guidelines": "start-here",
  Onboarding: "setup",
  Integrations: "integrations",
  "Meetings and notes": "meetings",
  Desktop: "desktop",
  "Deals and CRM workspace": "deals-crm",
  "Field mapping and CRM configuration": "field-mapping",
  "Drafts, email, and templates": "drafts-email",
  "Knowledge base and generated docs": "knowledge-base",
  "Ergo AI, search, and automation": "ai-search-automation",
  Reporting: "reporting",
  Admin: "admin",
  Troubleshooting: "troubleshooting",
};

const sectionMeta = {
  "Start and guidelines": {
    group: "Start here",
    icon: "sparkles",
    description: "Learn how Ergo works, who can use each area, and how to get support.",
  },
  Onboarding: {
    group: "Setup",
    icon: "list-checks",
    description: "Connect the systems Ergo needs and complete setup by role.",
  },
  Integrations: {
    group: "Integrations",
    icon: "plug",
    description: "Connect and maintain CRM, email, calendar, Slack, Pylon, and notetaker integrations.",
  },
  "Meetings and notes": {
    group: "Meetings and notetaker",
    icon: "video",
    description: "Use Ergo for meeting capture, transcripts, summaries, insights, recordings, and sharing.",
  },
  Desktop: {
    group: "Desktop",
    icon: "monitor",
    description: "Install, configure, and troubleshoot Ergo Desktop.",
  },
  "Deals and CRM workspace": {
    group: "Deals and CRM",
    icon: "kanban",
    description: "Use the deals workspace, CRM records, and account context in Ergo.",
  },
  "Field mapping and CRM configuration": {
    group: "Field mapping",
    icon: "settings",
    description: "Configure CRM fields, pipeline stages, permissions, and stage drift handling.",
  },
  "Drafts, email, and templates": {
    group: "Drafts and email",
    icon: "mail",
    description: "Understand when Ergo creates drafts and how to review, send, disable, or troubleshoot them.",
  },
  "Knowledge base and generated docs": {
    group: "Knowledge base and documents",
    icon: "file-text",
    description: "Upload knowledge, generate documents, connect documents to deals, and share them.",
  },
  "Ergo AI, search, and automation": {
    group: "Ergo AI, search, and automation",
    icon: "bot",
    description: "Use Ergo chat, search, scheduled runs, automations, and follow-up workflows.",
  },
  Reporting: {
    group: "Reporting",
    icon: "bar-chart-3",
    description: "Build dashboards, reports, rubrics, and shared reporting views.",
  },
  Admin: {
    group: "Admin",
    icon: "shield",
    description: "Manage teams, members, roles, global access, reporting access, and organization defaults.",
  },
  Troubleshooting: {
    group: "Troubleshooting",
    icon: "circle-help",
    description: "Resolve common issues by symptom.",
  },
};

const relatedByTitle = {
  "Welcome to Ergo": ["First-time setup checklist", "Roles and permissions", "Getting support"],
  "Roles and permissions": ["Spectator access", "Promote/demote/convert roles", "Permission or access denied"],
  "Spectator access": ["Roles and permissions", "Spectator management", "Permission or access denied"],
  "Security, data retention, and LLM usage": ["Recording/privacy basics", "Reviewing AI-generated outputs", "Getting support"],
  "Recording/privacy basics": ["Recording disclaimer", "Security, data retention, and LLM usage", "Transcript or recording missing"],
  "Getting support": ["Permission or access denied", "Notetaker did not join", "CRM sync issues"],
  "First-time setup checklist": ["Setup by role", "Primary admin setup for founders, RevOps, and sales leaders", "AE setup", "Connect email and calendar"],
  "Setup by role": ["Primary admin setup for founders, RevOps, and sales leaders", "Secondary admin and operator setup", "AE setup", "CSM setup", "Spectator and viewer setup"],
  "Primary admin setup for founders, RevOps, and sales leaders": ["Setup by role", "Connect your CRM", "Field mapping setup: required before CRM updates work", "Admin dashboard overview"],
  "Secondary admin and operator setup": ["Setup by role", "User sync", "Email templates setup", "Sync CRM/settings to team members"],
  "AE setup": ["Setup by role", "Connect email and calendar", "Email templates setup", "Review/edit AI drafts"],
  "CSM setup": ["Setup by role", "Connect email and calendar", "Meeting detail page", "Follow-ups panel"],
  "Spectator and viewer setup": ["Setup by role", "Spectator access", "Meeting availability and visibility", "Permission or access denied"],
  "Connect your CRM": ["CRM properties setup", "Pipeline stages", "Field mapping setup: required before CRM updates work"],
  "Connect email and calendar": ["Google Workspace", "Microsoft 365", "Calendar scopes and meeting auto-join"],
  "Notetaker setup": ["Ergo Notetaker", "Schedule or cancel the notetaker", "Notetaker waiting-room admission guide"],
  "CRM properties setup": ["CRM properties", "Field mapping setup: required before CRM updates work", "CRM sync issues"],
  "Pipeline stages": ["Stage drift resolution", "Stage drift conflicts", "Field mapping setup: required before CRM updates work"],
  Salesforce: ["Connect your CRM", "CRM properties", "CRM sync issues"],
  "Google Workspace": ["Connect email and calendar", "Calendar scopes and meeting auto-join", "Expired grants and reconnecting"],
  "Calendar scopes and meeting auto-join": ["Connect email and calendar", "Notetaker did not join", "Google/Microsoft/Slack reconnects"],
  "Microsoft 365": ["Connect email and calendar", "Calendar scopes and meeting auto-join", "Expired grants and reconnecting"],
  "Expired grants and reconnecting": ["Google/Microsoft/Slack reconnects", "Connect email and calendar", "Slack"],
  Slack: ["Google/Microsoft/Slack reconnects", "Slack monitoring and pre-call context", "Permission or access denied"],
  "Ergo Notetaker": ["Notetaker setup", "Notetaker did not join", "Add the bot to a live or ad hoc meeting"],
  "Schedule or cancel the notetaker": ["Ergo Notetaker", "Add the bot to a live or ad hoc meeting", "What happens when a meeting is rescheduled"],
  "Notetaker waiting-room admission guide": ["Notetaker did not join", "Schedule or cancel the notetaker", "Add the bot to a live or ad hoc meeting"],
  "What happens when a meeting is rescheduled": ["Add the bot to a live or ad hoc meeting", "Notetaker did not join", "Meeting availability and visibility"],
  "Add the bot to a live or ad hoc meeting": ["Schedule or cancel the notetaker", "Notetaker waiting-room admission guide", "Notetaker did not join"],
  "Meeting processing time and status states": ["Transcript or recording missing", "Why some meetings do not generate insights or drafts", "Meeting availability and visibility"],
  "Why some meetings do not generate insights or drafts": ["Meeting processing time and status states", "Turn post-call drafts on or off", "Draft send failures"],
  "Recording disclaimer": ["Recording/privacy basics", "Default meeting summary settings", "Recording disclaimer defaults"],
  "Meeting availability and visibility": ["Global meeting access", "Permission or access denied", "Transcript or recording missing"],
  "Install and sign in to Ergo Desktop": ["macOS permissions", "Troubleshoot missed detection or upload failures", "Sign-in and desktop callback issues"],
  "macOS permissions": ["Install and sign in to Ergo Desktop", "Troubleshoot missed detection or upload failures"],
  "Troubleshoot missed detection or upload failures": ["Install and sign in to Ergo Desktop", "macOS permissions", "Transcript or recording missing"],
  "Field Mapping overview": ["Field mapping setup: required before CRM updates work", "CRM properties", "Stage drift resolution"],
  "Field mapping setup: required before CRM updates work": ["CRM properties", "Stage drift resolution", "CRM sync issues"],
  "CRM properties": ["CRM properties setup", "Create/sync CRM properties", "CRM sync issues"],
  "Stage drift resolution": ["Stage drift conflicts", "Pipeline stages", "Field mapping setup: required before CRM updates work"],
  "Turn post-call drafts on or off": ["Draft email logic: when drafts are created and how to dismiss", "Why some meetings do not generate insights or drafts", "Draft send failures"],
  "Failed drafts retry/report": ["Draft send failures", "Turn post-call drafts on or off", "Expired grants and reconnecting"],
  "Promote/demote/convert roles": ["Roles and permissions", "Spectator management", "Permission or access denied"],
  "Spectator management": ["Spectator access", "Roles and permissions", "Permission or access denied"],
  "Grant meeting/reporting access": ["Global meeting access", "Roles and permissions", "Permission or access denied"],
  "Global meeting access": ["Meeting availability and visibility", "Grant meeting/reporting access", "Permission or access denied"],
  "CRM sync issues": ["Field mapping setup: required before CRM updates work", "Stage drift conflicts", "Expired grants and reconnecting"],
  "Stage drift conflicts": ["Stage drift resolution", "Pipeline stages", "CRM sync issues"],
  "Google/Microsoft/Slack reconnects": ["Expired grants and reconnecting", "Connect email and calendar", "Slack"],
  "Notetaker did not join": ["Notetaker waiting-room admission guide", "Add the bot to a live or ad hoc meeting", "What happens when a meeting is rescheduled"],
  "Transcript or recording missing": ["Meeting processing time and status states", "Delete/retry processing", "Getting support"],
  "Draft send failures": ["Failed drafts retry/report", "Expired grants and reconnecting", "Turn post-call drafts on or off"],
  "Permission or access denied": ["Roles and permissions", "Spectator access", "Grant meeting/reporting access"],
};

const imageByTitle = {
  "Roles and permissions": {
    file: "admin-dashboard-roles-annotated.svg",
    alt: "Annotated admin dashboard showing primary admin, secondary admin, user, and spectator access.",
  },
  "Setup by role": {
    file: "onboarding-setup-by-role-annotated.svg",
    alt: "Annotated onboarding view showing setup paths for primary admins, secondary admins, users, and spectators.",
  },
  "First-time setup checklist": {
    file: "onboarding-setup-by-role-annotated.svg",
    alt: "Annotated onboarding checklist showing role-specific setup paths in Ergo.",
  },
  "Primary admin setup for founders, RevOps, and sales leaders": {
    file: "onboarding-setup-by-role-annotated.svg",
    alt: "Annotated onboarding view showing the primary admin setup path for CRM, teams, defaults, reporting, and rollout.",
  },
  "Secondary admin and operator setup": {
    file: "admin-dashboard-roles-annotated.svg",
    alt: "Annotated admin dashboard showing delegated setup, user management, and access controls.",
  },
  "AE setup": {
    file: "drafts-templates-annotated.svg",
    alt: "Annotated drafts and templates workspace showing the AE setup path for email drafts and follow-up workflows.",
  },
  "CSM setup": {
    file: "meetings-dashboard-annotated.svg",
    alt: "Annotated meetings dashboard showing the CSM setup path for meetings, follow-ups, and account context.",
  },
  "Spectator and viewer setup": {
    file: "admin-dashboard-roles-annotated.svg",
    alt: "Annotated admin dashboard showing spectator and viewer access controls.",
  },
  "Connect email and calendar": {
    file: "calendar-email-connection-flow.svg",
    alt: "Flow diagram showing email and calendar connection before meeting capture and draft workflows.",
  },
  "Connect your CRM": {
    file: "integrations-settings-annotated.svg",
    alt: "Annotated integrations page showing CRM connection and setup areas.",
  },
  "Calendar scopes and meeting auto-join": {
    file: "calendar-email-connection-flow.svg",
    alt: "Flow diagram showing calendar scopes feeding meeting detection and auto-join behavior.",
  },
  "Add the bot to a live or ad hoc meeting": {
    file: "meetings-add-bot-flow.svg",
    alt: "Flow diagram showing how Add Bot to Meeting sends Ergo to an external meeting link.",
  },
  "Meeting processing time and status states": {
    file: "meeting-processing-flow.svg",
    alt: "Flow diagram showing recording, transcript, summary, insights, and drafts as separate processing outputs.",
  },
  "Why some meetings do not generate insights or drafts": {
    file: "meeting-processing-flow.svg",
    alt: "Flow diagram showing how meeting type and source affect summaries, insights, and draft generation.",
  },
  "Field mapping setup: required before CRM updates work": {
    file: "field-mapping-annotated.svg",
    alt: "Annotated field mapping screen showing CRM properties, pipeline stages, permissions, and sync checks.",
  },
  "Field Mapping overview": {
    file: "field-mapping-annotated.svg",
    alt: "Annotated field mapping screen showing how CRM fields, pipeline stages, permissions, and sync checks fit together.",
  },
  "CRM sync issues": {
    file: "field-mapping-crm-flow.svg",
    alt: "Flow diagram showing common checkpoints for CRM sync.",
  },
  "Google/Microsoft/Slack reconnects": {
    file: "integration-reconnect-flow.svg",
    alt: "Flow diagram showing reconnecting an expired integration grant.",
  },
  "Expired grants and reconnecting": {
    file: "integration-reconnect-flow.svg",
    alt: "Flow diagram showing how an expired grant is reconnected.",
  },
  "HubSpot meeting activities and recording links": {
    file: "hubspot-meeting-link-flow.svg",
    alt: "Flow diagram showing Ergo meeting recordings linked from HubSpot meeting activities.",
  },
  "Slack monitoring and pre-call context": {
    file: "slack-context-flow.svg",
    alt: "Flow diagram showing Slack channel context feeding pre-call context and follow-up workflows.",
  },
  "Using multiple notetakers with Ergo": {
    file: "multiple-notetakers-flow.svg",
    alt: "Flow diagram showing how multiple notetakers can create duplicate context and drafts.",
  },
  "Duplicate drafts from multiple notetakers": {
    file: "multiple-notetakers-flow.svg",
    alt: "Flow diagram showing duplicate drafts caused by multiple connected notetaker sources.",
  },
  "How Ergo names and matches CRM records": {
    file: "crm-record-matching-flow.svg",
    alt: "Flow diagram showing how meeting titles, companies, domains, and CRM records affect matching.",
  },
  "Backfill CRM fields from historical meetings": {
    file: "crm-backfill-flow.svg",
    alt: "Flow diagram showing options for historical CRM field backfills.",
  },
  "Pylon delivery failures, duplicate deliveries, and queue health": {
    file: "pylon-delivery-flow.svg",
    alt: "Flow diagram showing Pylon delivery setup, delivery attempts, duplicates, and escalation.",
  },
  "Reporting dashboard sharing and embedding troubleshooting": {
    file: "reporting-sharing-flow.svg",
    alt: "Flow diagram showing reporting dashboard sharing, permissions, and shared links.",
  },
  "Share charts/dashboards": {
    file: "reporting-sharing-flow.svg",
    alt: "Flow diagram showing how charts and dashboards can be shared.",
  },
};

function visualFor(row) {
  if (imageByTitle[row.title]) return imageByTitle[row.title];

  const title = row.title.toLowerCase();
  const category = row.category;

  if (category === "Admin" || title.includes("role") || title.includes("permission") || title.includes("spectator")) {
    return {
      file: "admin-dashboard-roles-annotated.svg",
      alt: "Annotated admin dashboard showing team membership, role controls, and access settings.",
    };
  }
  if (category === "Onboarding" || title.includes("setup") || title.includes("configuration")) {
    return {
      file: "onboarding-setup-by-role-annotated.svg",
      alt: "Annotated onboarding screen showing role-specific setup sections.",
    };
  }
  if (category === "Integrations" || title.includes("reconnect") || title.includes("grant")) {
    return {
      file: "integrations-settings-annotated.svg",
      alt: "Annotated integrations page showing connected sources, reconnect states, and setup tabs.",
    };
  }
  if (category === "Meetings and notes" || title.includes("notetaker") || title.includes("meeting")) {
    return {
      file: "meetings-dashboard-annotated.svg",
      alt: "Annotated meetings dashboard showing upcoming meetings, notetaker status, and manual bot dispatch.",
    };
  }
  if (category === "Desktop" || title.includes("desktop")) {
    return {
      file: "desktop-settings-annotated.svg",
      alt: "Annotated Ergo Desktop settings screen showing sign-in, permissions, status, and upload health.",
    };
  }
  if (category === "Deals and CRM workspace" || title.includes("deal") || title.includes("company")) {
    return {
      file: "deals-crm-annotated.svg",
      alt: "Annotated deals workspace showing pipeline views, filters, deal health, and CRM context.",
    };
  }
  if (category === "Field mapping and CRM configuration" || title.includes("crm") || title.includes("stage")) {
    return {
      file: "field-mapping-annotated.svg",
      alt: "Annotated field mapping screen showing CRM properties, pipeline stages, and sync checks.",
    };
  }
  if (category === "Drafts, email, and templates" || title.includes("draft") || title.includes("email")) {
    return {
      file: "drafts-templates-annotated.svg",
      alt: "Annotated drafts and templates workspace showing draft queues, review controls, and send states.",
    };
  }
  if (category === "Knowledge base and generated docs" || title.includes("document")) {
    return {
      file: "knowledge-base-annotated.svg",
      alt: "Annotated knowledge base showing document status, scopes, linked deals, and sharing controls.",
    };
  }
  if (category === "Ergo AI, search, and automation" || title.includes("search") || title.includes("agent")) {
    return {
      file: "ai-search-automation-annotated.svg",
      alt: "Annotated Ergo AI and search workspace showing sources, actions, filters, and scheduled runs.",
    };
  }
  if (category === "Reporting" || title.includes("report") || title.includes("dashboard")) {
    return {
      file: "reporting-dashboard-annotated.svg",
      alt: "Annotated reporting dashboard showing filters, chart builder, sharing, and scheduled delivery.",
    };
  }

  return null;
}

function parseInventory(markdown) {
  const rows = [];
  let inIndex = false;

  for (const line of markdown.split("\n")) {
    if (line.startsWith("## Article Index")) {
      inIndex = true;
      continue;
    }
    if (line.startsWith("## Coverage Checklist")) {
      inIndex = false;
    }
    if (!inIndex || !line.startsWith("|")) continue;
    if (line.includes("|---") || line.includes("| title |")) continue;

    const cells = line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

    if (cells.length !== 9) continue;
    const [title, category, audience, access, priority, featureGate, requiredIntegration, status, owner] = cells;
    rows.push({ title, category, audience, access, priority, featureGate, requiredIntegration, status, owner });
  }

  return rows;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pagePathFor(row) {
  const dir = categoryDirs[row.category];
  if (!dir) throw new Error(`Missing category dir for ${row.category}`);
  return `customer-docs/${dir}/${slugify(row.title)}`;
}

function descriptionFor(row) {
  const specific = {
    "Welcome to Ergo": "Start here to understand what Ergo does, what to set up first, and where each workflow lives.",
    "Navigating Ergo": "Find the main Ergo workspaces for meetings, drafts, deals, reporting, integrations, admin settings, and support.",
    "Setup by role": "Understand which setup tasks belong to primary admins, secondary admins, users, spectators, and desktop users.",
    "Primary admin setup for founders, RevOps, and sales leaders": "Set up Ergo as the workspace owner responsible for CRM readiness, teams, permissions, defaults, reporting, and rollout.",
    "Secondary admin and operator setup": "Help operate Ergo setup after the primary admin defines systems, permissions, team defaults, and rollout rules.",
    "AE setup": "Complete the personal setup AEs need for meetings, pre-call prep, post-call drafts, templates, follow-ups, and deal context.",
    "CSM setup": "Complete the personal setup CSMs need for customer meetings, summaries, account context, follow-ups, and handoff workflows.",
    "Spectator and viewer setup": "Give viewers limited access to the meetings, reports, or shared links they need without full user setup.",
    "First-time setup checklist": "Complete the first setup pass for admins, users, spectators, integrations, meetings, and CRM readiness.",
    "Roles and permissions": "Understand primary admin, secondary admin, user, spectator, desktop, and access-specific permissions in Ergo.",
    "Spectator access": "Give limited meeting, reporting, or shared-link visibility without granting full user access.",
    "Data sources and freshness": "Understand which connected sources feed Ergo and why meetings, CRM, drafts, and reports update on different timelines.",
    "Reviewing AI-generated outputs": "Review summaries, drafts, CRM updates, reports, and generated documents before using them externally.",
    "Prompting Ergo effectively": "Ask Ergo clearer questions by naming the customer, source, output format, and constraints you want it to use.",
    "Recording/privacy basics": "Understand notetaker recording, disclaimers, shared links, and privacy choices before using meeting capture.",
    "Getting support": "Send Ergo support enough context to troubleshoot meetings, drafts, integrations, CRM sync, or access issues quickly.",
    "Connect your CRM": "Connect the workspace CRM and prepare field mapping, permissions, pipelines, and stages for reliable writeback.",
    "Connect email and calendar": "Connect Google Workspace or Microsoft 365 so Ergo can detect meetings and create email workflows.",
    "Notetaker setup": "Choose and configure the notetaker source that will capture meetings for summaries, transcripts, and follow-up workflows.",
    "CRM properties setup": "Map required CRM properties during onboarding before expecting Ergo to update records or reporting fields.",
    "Pipeline stages": "Configure CRM pipelines and stages so Ergo can classify, update, and report on deals correctly.",
    "Field Mapping overview": "Understand how CRM properties, permissions, pipelines, and stage drift affect Ergo writeback.",
    "Field mapping setup: required before CRM updates work": "Complete field mapping before expecting Ergo to write CRM updates, reports, or stage changes.",
    "Drafts inbox": "Review generated follow-up drafts, failed drafts, scheduled messages, sent items, and dismissed drafts.",
    "Review/edit AI drafts": "Check AI-generated drafts for tone, facts, recipients, next steps, and links before sending.",
    "Turn post-call drafts on or off": "Control whether Ergo creates post-call email drafts for users, teams, or eligible meeting types.",
    "Draft email logic: when drafts are created and how to dismiss": "Understand why a meeting did or did not create a draft and what to do with unwanted drafts.",
    "Dashboard/upcoming meetings": "Use the dashboard to check upcoming meetings, notetaker status, and meeting readiness before calls.",
    "Add the bot to a live or ad hoc meeting": "Manually dispatch the Ergo bot to a live, ad hoc, or external Zoom, Google Meet, or Microsoft Teams link.",
    "Notetaker waiting-room admission guide": "Help meeting hosts admit the Ergo bot and recover when the bot is waiting, removed, or missed.",
    "Meeting processing time and status states": "Understand why recordings, transcripts, summaries, insights, and drafts can finish at different times.",
    "Why some meetings do not generate insights or drafts": "Check meeting type, source, filters, and email setup when expected insights or drafts are missing.",
    "Install and sign in to Ergo Desktop": "Install Ergo Desktop, sign in, grant permissions, and run a test capture before customer calls.",
    "macOS permissions": "Grant the macOS permissions Ergo Desktop needs for microphone access, meeting detection, recording, and upload.",
    "Reporting overview": "Use reporting dashboards, charts, filters, and shared views to inspect team and customer activity.",
    "Chart builder": "Build reporting charts from the right source fields, filters, buckets, time ranges, and drilldowns.",
    "Admin dashboard overview": "Use the admin dashboard to manage teams, members, access, settings, and organization defaults.",
    "Organization and team hierarchy": "Understand how teams, primary admins, secondary admins, users, and spectators shape access in Ergo.",
    "Promote/demote/convert roles": "Change a person's role or access level without over-granting meeting, reporting, or admin visibility.",
    "Grant meeting/reporting access": "Give users and spectators the meeting or reporting access they need and no more.",
  };
  if (specific[row.title]) return specific[row.title];

  const lowerTitle = customerSentence(row.title);
  if (isTroubleshootingLike(row)) return `Diagnose and resolve ${lowerTitle} in Ergo.`;
  const base = {
    "Start and guidelines": `Use this guide to understand ${lowerTitle} before working in Ergo.`,
    Onboarding: `Complete the ${lowerTitle} onboarding step with the right owner and prerequisites.`,
    Integrations: `Connect and maintain ${row.title} with the right account, permissions, reconnect path, and failure checks.`,
    "Meetings and notes": `Handle ${lowerTitle} in the meetings and notetaker workflow.`,
    Desktop: `Set up and use Ergo Desktop for ${lowerTitle}.`,
    "Deals and CRM workspace": `Use ${lowerTitle} to inspect customer context, pipeline state, and CRM activity in Ergo.`,
    "Field mapping and CRM configuration": `Configure ${lowerTitle} so CRM updates, stage logic, and reporting fields work reliably.`,
    "Drafts, email, and templates": `Use ${lowerTitle} for post-call email drafting, review, sending, and team follow-up workflows.`,
    "Knowledge base and generated docs": `Use ${lowerTitle} to manage document context, generated docs, sharing, and deal links.`,
    "Ergo AI, search, and automation": `Use ${lowerTitle} with the right customer context, sources, filters, and automation checks.`,
    Reporting: `Use ${lowerTitle} to build, interpret, share, or schedule reporting in Ergo.`,
    Admin: `Manage ${lowerTitle} across teams, members, access, defaults, and organization settings.`,
    Troubleshooting: `Diagnose and resolve ${lowerTitle} in Ergo.`,
  };
  return base[row.category] ?? `Learn ${lowerTitle} in Ergo.`;
}

function customerAudience(row) {
  const roles = new Set(row.audience.split(";").map((role) => role.trim()));
  const title = row.title.toLowerCase();
  const hasAdmins = roles.has("Admin") || roles.has("Super Admin");
  const hasUsers = roles.has("User");
  const hasSpectators = roles.has("Spectator");
  const hasDesktop = roles.has("Desktop");
  const isAdminArea =
    row.category === "Admin" ||
    row.access.includes("Admin-only") ||
    row.category === "Field mapping and CRM configuration" ||
    title.includes("crm properties") ||
    title.includes("pipeline") ||
    title.includes("stage") ||
    title.includes("field mapping") ||
    title.includes("configuration") ||
    title.includes("defaults");

  if (row.title === "Setup by role" || row.title === "First-time setup checklist") {
    return "primary admins who own rollout, secondary admins helping with delegated setup, users completing personal setup, and spectators receiving limited access";
  }
  if (row.title === "Primary admin setup for founders, RevOps, and sales leaders") {
    return "founders, RevOps, VPs, sales leaders, and operations owners acting as the primary admin for rollout";
  }
  if (row.title === "Secondary admin and operator setup") {
    return "RevOps teammates, sales operations, customer operations, enablement, or managers helping administer Ergo after the primary admin sets direction";
  }
  if (row.title === "AE setup") {
    return "AEs, account executives, founders selling directly, and sales managers coaching reps on daily Ergo workflows";
  }
  if (row.title === "CSM setup") {
    return "CSMs, account managers, customer success leaders, founders handling customers, and post-sale teams using Ergo for customer context";
  }
  if (row.title === "Spectator and viewer setup") {
    return "spectators, executives, managers, advisors, or cross-functional viewers who only need limited meeting or reporting visibility";
  }
  if (row.title === "Roles and permissions") {
    return "primary admins, secondary admins, RevOps, founders, sales leaders, users, and spectators who need to understand what each access level means";
  }
  if (row.title === "Connect email and calendar" || row.title === "Google Workspace" || row.title === "Microsoft 365") {
    return "users connecting their own email/calendar and admins helping teams finish setup or reconnect expired grants";
  }
  if (row.title.includes("Notetaker") || row.category === "Meetings and notes") {
    const people = ["sales reps, account owners, CSMs, founders, and managers who capture or review customer meetings"];
    if (hasAdmins) people.push("admins setting meeting capture and visibility defaults");
    if (hasSpectators) people.push("spectators viewing shared meetings");
    if (hasDesktop) people.push("desktop users capturing meetings locally");
    return people.join("; ");
  }
  if (row.category === "Integrations") {
    if (title.includes("slack") || title.includes("pylon") || title.includes("crm") || title.includes("salesforce") || title.includes("hubspot") || title.includes("attio") || title.includes("pipedrive")) {
      return "primary admins, secondary admins, RevOps, support operations, and sales operations teams that manage connected systems";
    }
    if (hasUsers) return "users connecting personal sources and admins helping teams troubleshoot connection or reconnect issues";
    return "primary admins, secondary admins, RevOps, and operators managing workspace integrations";
  }
  if (row.category === "Drafts, email, and templates") {
    if (isAdminArea || title.includes("auto-send") || title.includes("team access")) {
      return "primary admins, secondary admins, RevOps, and sales leaders setting team draft behavior and email controls";
    }
    return "sales reps, account owners, founders, and managers reviewing or sending follow-up drafts";
  }
  if (row.category === "Field mapping and CRM configuration") {
    return "primary admins, secondary admins with CRM permissions, RevOps, sales operations, and CRM owners";
  }
  if (row.category === "Deals and CRM workspace") {
    if (title.includes("bulk")) return "RevOps, sales leaders, founders, and users trusted to make bulk updates or send bulk drafts";
    return "sales reps, account owners, founders, sales leaders, RevOps, and managers reviewing pipeline or account context";
  }
  if (row.category === "Reporting") {
    return "founders, sales leaders, RevOps, managers, and users with reporting access";
  }
  if (row.category === "Admin") {
    return "primary admins and secondary admins with permission for this area";
  }
  if (row.category === "Desktop") {
    return "desktop users who record locally and admins helping them verify permissions, detection, and uploads";
  }
  if (row.category === "Knowledge base and generated docs") {
    return hasAdmins
      ? "primary admins, secondary admins, RevOps, and users managing document context or generated customer materials"
      : "users managing document context or generated customer materials";
  }
  if (row.category === "Ergo AI, search, and automation") {
    return "sales reps, account owners, founders, managers, RevOps, and admins using customer context, search, or scheduled runs";
  }

  const parts = [];
  if (hasAdmins) {
    parts.push(isAdminArea ? "primary admins and secondary admins with permission for this area" : "primary admins, secondary admins, RevOps, sales leaders, and operators who manage rollout");
  }
  if (hasUsers) {
    parts.push("users who complete setup or use this workflow day to day");
  }
  if (hasSpectators) {
    parts.push("spectators with limited meeting, reporting, or shared-link access");
  }
  if (hasDesktop) {
    parts.push("desktop users capturing meetings from the Ergo Desktop app");
  }

  if (parts.length === 0) return "people using this workflow in Ergo";
  return [...new Set(parts)].join("; ");
}

function customerAccess(row) {
  const parts = [];
  if (row.access.includes("Admin-only")) {
    parts.push("Requires the primary admin role or a secondary admin permission that covers this area.");
  } else if (row.access.includes("Reporting access")) {
    parts.push("Requires reporting access.");
  } else if (row.access.includes("Desktop-only")) {
    parts.push("Only applies to Ergo Desktop.");
  } else if (row.access.includes("Shared link")) {
    parts.push("May be available through a shared link.");
  } else if (row.access.includes("Beta/Gated")) {
    parts.push("Only appears when enabled for your workspace.");
  }

  if (row.requiredIntegration !== "None") {
    const requirement = friendlyRequirement(row.requiredIntegration);
    const isAccessLabel = requirement === "Reporting" && row.access.includes("Reporting access");
    if (!isAccessLabel) {
      parts.push(requirement === "Reporting" ? "Requires reporting enabled for your workspace." : `Requires ${requirement}.`);
    }
  }
  if (row.featureGate !== "None" && (row.access.includes("Beta/Gated") || row.featureGate.includes("enabled"))) {
    parts.push("Ask your Ergo team if the feature does not appear.");
  }

  return parts;
}

function audienceBlock(row) {
  const items = [`For ${customerAudience(row)}.`];
  return [...items, ...customerAccess(row)];
}

function sectionAudience(category) {
  const audiences = {
    "Start and guidelines": [
      "Everyone using Ergo, plus rollout owners who need a shared vocabulary for roles, data, privacy, AI outputs, and support.",
    ],
    Onboarding: [
      "Primary admins who own rollout, secondary admins helping configure teams, users completing personal setup, and spectators receiving limited access.",
    ],
    Integrations: [
      "Primary admins, secondary admins, RevOps, sales operations, support operations, and users connecting personal sources like email or calendar.",
    ],
    "Meetings and notes": [
      "Sales reps, account owners, CSMs, founders, managers, spectators, and admins responsible for meeting capture and visibility.",
    ],
    Desktop: [
      "Desktop users recording locally and admins helping them verify permissions, meeting detection, recording, and upload health.",
    ],
    "Deals and CRM workspace": [
      "Sales reps, account owners, founders, sales leaders, managers, RevOps, and users working from pipeline and account context.",
    ],
    "Field mapping and CRM configuration": [
      "Primary admins, secondary admins with CRM permissions, RevOps, sales operations, and CRM owners.",
    ],
    "Drafts, email, and templates": [
      "Sales reps, account owners, founders, managers, RevOps, and admins shaping post-call email workflows.",
    ],
    "Knowledge base and generated docs": [
      "Users and admins managing document context, generated customer materials, post-call instructions, and sharing.",
    ],
    "Ergo AI, search, and automation": [
      "Sales reps, account owners, founders, managers, RevOps, and admins using customer context, search, scheduled runs, or follow-ups.",
    ],
    Reporting: [
      "Founders, sales leaders, RevOps, managers, and users with reporting access.",
    ],
    Admin: [
      "Primary admins and secondary admins with permission for the relevant teams, members, settings, access, or defaults.",
    ],
    Troubleshooting: [
      "Anyone diagnosing setup, meeting capture, CRM sync, drafts, search, reporting, integrations, desktop, or access issues.",
    ],
  };
  return audiences[category] ?? ["People using this area of Ergo."];
}

function sectionBeforeStart(category) {
  const items = {
    "Start and guidelines": [
      "Know which workspace and team you are using.",
      "Ask a primary or secondary admin when access, connected sources, or recording defaults are unclear.",
    ],
    Onboarding: [
      "Decide who owns primary admin setup before inviting the broader team.",
      "Connect workspace-level systems before asking users to finish personal setup.",
      "Use role-specific setup articles when a person only needs part of the full setup path.",
    ],
    Integrations: [
      "Use the account your team expects Ergo to read from or write through.",
      "Approve every required scope during connection or reconnect.",
      "Check channel, calendar, queue, object, and field permissions when a connected source looks incomplete.",
    ],
    "Meetings and notes": [
      "Connect calendar and the intended notetaker source first.",
      "Check meeting links, waiting rooms, meeting ownership, and source calendars when the bot does not join.",
      "Remember that recordings, transcripts, summaries, insights, and drafts can finish separately.",
    ],
    Desktop: [
      "Install Ergo Desktop, sign in with the same Ergo account, and grant macOS permissions.",
      "Run a short test capture before relying on Desktop for customer calls.",
    ],
    "Deals and CRM workspace": [
      "Connect CRM and complete field mapping before relying on CRM writeback or AI deal context.",
      "Check filters, views, ownership, and record matching before assuming a deal or company is missing.",
    ],
    "Field mapping and CRM configuration": [
      "Use a CRM account that can read and update the fields Ergo needs.",
      "Map properties, pipelines, and stages before enabling broad CRM automation.",
      "Test changes on one record before rolling them out.",
    ],
    "Drafts, email, and templates": [
      "Connect email/calendar and confirm draft generation is enabled for the user or team.",
      "Review AI drafts before sending unless your workspace has explicitly approved an auto-send workflow.",
    ],
    "Knowledge base and generated docs": [
      "Confirm document scope before upload or sharing.",
      "Wait for document processing before expecting Ergo to use the file as context.",
    ],
    "Ergo AI, search, and automation": [
      "Name the customer, deal, meeting, document, date range, or source you want Ergo to use.",
      "Check sources and actions before relying on an answer or scheduled output.",
    ],
    Reporting: [
      "Confirm reporting is enabled and the viewer has reporting access.",
      "Check filters, date ranges, source fields, and data freshness before interpreting results.",
    ],
    Admin: [
      "Sign in as the primary admin or as a secondary admin with permission for the area you are changing.",
      "Confirm the workspace, team, member, and downstream access impact before saving changes.",
    ],
    Troubleshooting: [
      "Capture the workspace, affected user, integration, meeting/deal/report/draft, and approximate time window.",
      "Start with the article closest to the symptom, then escalate with the checks you already tried.",
    ],
  };
  return items[category] ?? ["Confirm workspace, access, and required integrations before starting."];
}

const articleAudienceTitles = new Set([
  "Setup by role",
  "Primary admin setup for founders, RevOps, and sales leaders",
  "Secondary admin and operator setup",
  "AE setup",
  "CSM setup",
  "Spectator and viewer setup",
  "Roles and permissions",
  "Spectator access",
]);

function shouldShowArticleAudience(row) {
  return articleAudienceTitles.has(row.title);
}

const articleBeforeStartTitles = new Set([
  "Connect your CRM",
  "Connect email and calendar",
  "Notetaker setup",
  "CRM properties setup",
  "Pipeline stages",
  "Field mapping setup: required before CRM updates work",
  "Create/sync CRM properties",
  "Add the bot to a live or ad hoc meeting",
  "Upload external recordings",
  "Share/revoke/password-protect meetings",
  "Install and sign in to Ergo Desktop",
  "macOS permissions",
  "Desktop onboarding checklist",
  "Troubleshoot missed detection or upload failures",
  "Grant meeting/reporting access",
  "Global meeting access",
  "Sync CRM/settings to team members",
  "Reporting email cadences",
  "Email/Slack delivery for scheduled runs",
  "Share charts/dashboards",
  "Expired grants and reconnecting",
]);

function shouldShowArticleBeforeStart(row) {
  if (articleBeforeStartTitles.has(row.title)) return true;
  if (row.category === "Integrations") return true;
  return false;
}

function articleBeforeStart(row) {
  if (!shouldShowArticleBeforeStart(row)) return [];

  const title = row.title.toLowerCase();
  const items = [];
  const requirement = row.requiredIntegration !== "None" ? friendlyRequirement(row.requiredIntegration) : null;
  const isConnectionArticle =
    row.category === "Integrations" ||
    title.startsWith("connect ") ||
    title.includes("reconnecting") ||
    title.includes("expired grant");

  if (row.access.includes("Admin-only")) {
    items.push("Sign in as the primary admin or as a secondary admin with permission for this area.");
  }
  if (row.access.includes("Reporting access")) {
    items.push("Confirm reporting is enabled and the viewer has reporting access.");
  }
  if (row.access.includes("Desktop-only")) {
    items.push("Install Ergo Desktop, sign in, and grant required macOS permissions.");
  }
  if (row.access.includes("Beta/Gated")) {
    items.push("Confirm this feature is enabled for your workspace.");
  }
  if (row.access.includes("Shared link")) {
    items.push("Confirm the link, password, or viewer access is still valid.");
  }

  if (requirement) {
    if (isConnectionArticle) {
      items.push(`Have access to the ${requirement} account or admin console you plan to connect.`);
      items.push("Use the account your team expects Ergo to read from or write through.");
    } else if (row.category === "Meetings and notes" && title.includes("bot")) {
      items.push("Have the live meeting link available.");
      items.push("Make sure the meeting host can admit the Ergo bot if there is a waiting room.");
    } else {
      items.push(`Confirm ${requirement} is connected or available.`);
    }
  }

  return [...new Set(items)];
}

function articleType(row) {
  const title = row.title.toLowerCase();
  if (isTroubleshootingLike(row)) return "troubleshooting";
  if (
    row.category === "Onboarding" ||
    row.category === "Integrations" ||
    title.startsWith("connect") ||
    title.startsWith("install") ||
    title.includes("setup") ||
    title.includes("macos permissions")
  ) {
    return "setup";
  }
  if (
    row.category === "Admin" ||
    row.category === "Field mapping and CRM configuration" ||
    title.includes("settings") ||
    title.includes("defaults") ||
    title.includes("configuration") ||
    title.includes("properties") ||
    title.includes("pipeline") ||
    title.includes("stage")
  ) {
    return "configuration";
  }
  if (
    title.includes("overview") ||
    title.includes("welcome") ||
    title.includes("navigating") ||
    title.includes("privacy") ||
    title.includes("freshness") ||
    title.includes("reviewing") ||
    title.includes("prompting") ||
    title.includes("roles and permissions") ||
    title.includes("security")
  ) {
    return "overview";
  }
  return "workflow";
}

function stepsHeading(row) {
  const type = articleType(row);
  if (type === "setup") return "Setup steps";
  if (type === "configuration") return "Configure it";
  if (type === "overview") return "Key things to know";
  return "Use this workflow";
}

function beforeStart(row) {
  const title = row.title.toLowerCase();
  const isConnectionArticle =
    row.category === "Integrations" ||
    title.startsWith("connect ") ||
    title.includes("reconnecting") ||
    title.includes("expired grant");

  if (row.title === "Primary admin setup for founders, RevOps, and sales leaders") {
    return [
      "Have production CRM admin access ready, including permission to create or approve properties and pipeline settings.",
      "Know your current sales stages, which stages should be locked, and where new deals should enter the pipeline.",
      "Decide who owns rollout decisions for CRM, notetaker behavior, templates, reporting, and user access.",
      "Bring access to Google Workspace or Microsoft 365, Slack, and reporting owners if those systems are part of rollout.",
    ];
  }
  if (row.title === "Secondary admin and operator setup") {
    return [
      "Confirm which primary admin account you should sync from.",
      "Make sure your own Ergo account is provisioned in the correct workspace and team.",
      "Know which setup areas you are allowed to manage versus which require the primary admin.",
    ];
  }
  if (row.title === "AE setup" || row.title === "CSM setup") {
    return [
      "Make sure your account is provisioned in the correct workspace and team.",
      "Have access to your own Google Workspace or Microsoft 365 account.",
      "Ask your primary or secondary admin which notetaker source, templates, and Slack workflow your team uses.",
    ];
  }
  if (row.title === "Spectator and viewer setup") {
    return [
      "Confirm the viewer should have limited access rather than full user access.",
      "Identify the exact meetings, reports, dashboards, folders, or shared links they should see.",
      "Ask a primary or secondary admin to provision access before sending the viewer a link.",
    ];
  }

  if (row.access.includes("Admin-only")) {
    const items = [
      "Sign in as the primary admin or as a secondary admin with permission for this area.",
      "Confirm you are working in the intended organization or team.",
    ];
    if (row.requiredIntegration !== "None") {
      const requirement = friendlyRequirement(row.requiredIntegration);
      items.push(requirement === "Reporting" ? "Confirm reporting is enabled for your workspace." : `Confirm ${requirement} is enabled or connected if this setting depends on it.`);
    }
    items.push("Review the change with the affected users before updating access or defaults.");
    return items;
  }
  if (row.requiredIntegration !== "None") {
    const requirement = friendlyRequirement(row.requiredIntegration);
    if (isConnectionArticle) {
      return [
        "Sign in to the correct Ergo workspace.",
        `Have access to the ${requirement} account or admin console you plan to connect.`,
        "Use the account your team expects Ergo to read from or write through.",
        "If you are reconnecting, use the same account when possible and approve every requested scope.",
      ];
    }
    const connectorText =
      requirement.includes(", ") || requirement.includes(" or ")
        ? `Confirm the relevant source is connected or available: ${requirement}.`
        : `Confirm the required source is connected or available: ${requirement}.`;
    return [
      connectorText,
      "Make sure you are signed in to the correct Ergo workspace.",
      "If you do not see the page or setting, ask your primary admin or a secondary admin to check your access.",
    ];
  }
  if (row.access.includes("Desktop-only")) {
    return [
      "Install Ergo Desktop and sign in with your Ergo account.",
      "Confirm your workspace has Desktop enabled.",
      "Keep your meeting app and Ergo Desktop open while testing setup.",
    ];
  }
  return [
    "Sign in to Ergo.",
    "Confirm you are in the correct workspace.",
    "If a step is missing, ask your primary admin or a secondary admin to confirm your access.",
  ];
}

function friendlyRequirement(value) {
  return value
    .replace(/; /g, ", ")
    .replace(/Google Workspace, Microsoft 365/g, "Google Workspace or Microsoft 365")
    .replace(/Notetaker, Google Workspace/g, "Notetaker and Google Workspace")
    .replace(/Calendar, Ergo Notetaker/g, "Calendar and Ergo Notetaker")
    .replace(/Calendar, Notetaker/g, "Calendar and Notetaker");
}

function customerSentence(title) {
  return title
    .toLowerCase()
    .replace(/\bcrm\b/g, "CRM")
    .replace(/\bllm\b/g, "LLM")
    .replace(/\bai\b/g, "AI")
    .replace(/\bergo\b/g, "Ergo")
    .replace(/\bpylon\b/g, "Pylon")
    .replace(/\bhubspot\b/g, "HubSpot")
    .replace(/\bsalesforce\b/g, "Salesforce")
    .replace(/\bgoogle workspace\b/g, "Google Workspace")
    .replace(/\bmicrosoft 365\b/g, "Microsoft 365")
    .replace(/\bslack\b/g, "Slack");
}

function setupSteps(row) {
  const title = row.title;
  const category = row.category;

  const specific = {
    "Welcome to Ergo": [
      "Start with the setup checklist so Ergo has the data sources it needs.",
      "Connect calendar and email before relying on meetings, summaries, or drafts.",
      "Ask your primary admin or a secondary admin which CRM, collaboration, and notetaker sources your workspace uses.",
      "Use the left navigation to move between meetings, drafts, reporting, integrations, and admin areas.",
    ],
    "Roles and permissions": [
      "Start by deciding whether the person should be a primary admin, secondary admin, user, spectator, or desktop user.",
      "Use a primary admin for org-level setup and ownership, including CRM setup, team structure, billing or usage review, and defaults.",
      "Use secondary admins for team-level setup or delegated configuration when they should help manage users, settings, or reporting without owning everything.",
      "Use users for day-to-day workflows like meetings, drafts, templates, follow-ups, search, and deal review.",
      "Use spectator access for limited viewing workflows instead of granting full user access.",
    ],
    "Spectator access": [
      "Confirm the person should have view-only or limited access.",
      "Add or convert the person as a Spectator from Admin.",
      "Grant only the meeting or reporting access they need.",
      "Review access after team or workspace changes.",
    ],
    "Security, data retention, and LLM usage": [
      "Review what data sources your workspace connects to Ergo.",
      "Confirm which teams and users can access meeting, CRM, reporting, and draft content.",
      "Use admin settings for default meeting access and sharing behavior.",
      "Contact Ergo for security, retention, or regulated-industry requirements that are not visible in-app.",
    ],
    "Recording/privacy basics": [
      "Confirm whether your workspace uses the Ergo Notetaker, Ergo Desktop, or another notetaker source.",
      "Review the recording disclaimer shown to meeting participants.",
      "Use sharing and password settings when sending meeting links externally.",
      "Ask an admin about organization defaults for recording, summary, and access behavior.",
    ],
    "Getting support": [
      "Open support from the in-app chat or your customer Slack channel.",
      "Include the workspace, affected user, meeting or deal name, integration, and approximate time.",
      "Describe what you expected to happen and what happened instead.",
      "Attach screenshots only if they do not expose sensitive customer data.",
    ],
    "Data sources and freshness": [
      "Review which integrations are connected for CRM, email, calendar, meetings, documents, and Slack context.",
      "Check when each source last synced or produced a new output.",
      "Remember that meeting outputs, CRM updates, drafts, and reports can refresh on different schedules.",
      "Contact support if a connected source looks healthy but Ergo still shows stale data.",
    ],
    "Reviewing AI-generated outputs": [
      "Review summaries, drafts, CRM updates, reports, and generated documents before relying on them externally.",
      "Check the source context when an output looks wrong or incomplete.",
      "Edit drafts or instructions when the output is directionally right but needs tone or detail changes.",
      "Report outputs that use the wrong meeting, deal, company, or customer context.",
    ],
    "Prompting Ergo effectively": [
      "Name the customer, deal, meeting, report, or document you want Ergo to use.",
      "Ask for a specific output format when you need bullets, a draft, a summary, or a report-ready answer.",
      "Mention constraints like date range, team, pipeline, or meeting source.",
      "Review the sources and actions Ergo cites before acting on an answer.",
    ],
    "First-time setup checklist": [
      "Ask the primary admin to complete workspace-level setup first: CRM, field mapping, teams, defaults, reporting access, and any required collaboration tools.",
      "Have secondary admins complete delegated team setup, user sync, templates, notetaker defaults, or reporting setup where they have permission.",
      "Have users connect email and calendar, review templates and personal preferences, confirm notetaker behavior, and run one test meeting or draft workflow.",
      "Give spectators only the meeting, reporting, or shared-link access they need.",
      "Run one test workflow before rolling the setup out to more teams.",
    ],
    "Setup by role": [
      "Use the primary admin setup guide when a founder, RevOps owner, VP, sales leader, or ops owner is responsible for systems, permissions, teams, defaults, and rollout.",
      "Use the secondary admin and operator setup guide when someone helps administer users, templates, access, or reporting after the primary setup direction is clear.",
      "Use the AE setup guide for individual sellers who need meetings, pre-call prep, post-call drafts, templates, follow-ups, and deal context.",
      "Use the CSM setup guide for post-sale users who need customer meetings, summaries, account context, handoffs, and follow-up workflows.",
      "Use spectator and viewer setup when someone should view selected meetings, reports, or shared links without a full user workflow.",
    ],
    "Primary admin setup for founders, RevOps, and sales leaders": [
      "Prepare production CRM access before onboarding; do not connect a sandbox or test CRM if you expect useful AI output.",
      "Connect the CRM with an account that can read and update the objects, properties, stages, and records Ergo should manage.",
      "Set up pipeline stages with clear entry points, exit points, and locked stages such as Closed Won when automated restaging should not happen.",
      "Add or approve Ergo-recommended CRM properties, including fields that may not be displayed to reps but still give Ergo context for automation and reporting.",
      "Configure email/calendar guidance for the team: inbox monitoring, follow-up drafts, surfacing, and any external email client setting. Each user still authenticates their own email.",
      "Enable the notetaker, review what meetings it will join, connect Slack if your team uses Slack nudges or pre-call briefs, and set recording/disclaimer defaults.",
      "Create teams, assign secondary admins, provision users, grant reporting or spectator access, and run a small test with one meeting, one draft, one CRM update, and one report before broad rollout.",
    ],
    "Secondary admin and operator setup": [
      "Confirm what the primary admin delegated: user provisioning, team membership, template cleanup, notetaker defaults, reporting access, support triage, or settings sync.",
      "Use Sync with Admin when your setup should inherit the primary admin's CRM configuration, pipeline stages, and property mappings.",
      "Select the primary admin's email in the sync dropdown; it is the admin account you are syncing from, not necessarily your own account.",
      "Connect your own email/calendar and Slack after syncing; those personal grants do not transfer from the primary admin.",
      "Help users finish personal setup, verify first meetings or drafts, and troubleshoot wrong workspace, expired grants, missing admin email, and hidden reporting access.",
      "Sync CRM/settings to team members only after the primary admin has approved the source settings.",
    ],
    "AE setup": [
      "Connect email and calendar so Ergo can detect customer meetings and support post-call drafts.",
      "Confirm the notetaker source for your workspace and check upcoming meetings before calls.",
      "Review or customize post-call email templates, draft preferences, signature behavior, and personal instructions.",
      "Use Slack pre-call briefs and Ergo context before meetings; most AEs do not need to live in the Ergo dashboard every day.",
      "Use your inbox as the main daily surface: post-call follow-up drafts arrive after processed calls, and surfacing drafts appear when Ergo finds deals needing attention.",
      "Review every draft before sending. Ergo creates drafts and nudges; it should not be treated as auto-send unless your workspace has explicitly configured that workflow.",
      "Check summaries, action items, follow-ups, and CRM context after calls, then report missing meetings, duplicate drafts, wrong deal matching, or missing transcript/recording details with the meeting link and customer name.",
    ],
    "CSM setup": [
      "Connect email and calendar so Ergo can detect customer meetings and support account follow-up workflows.",
      "Ask the primary admin whether your workspace has a CS pipeline, renewal/expansion stages, or CS-specific CRM properties before your first customer workflow.",
      "Confirm which customer meetings should be captured and which internal meetings should be skipped.",
      "Review templates and instructions for recap emails, renewal or expansion notes, handoffs, support escalations, and customer next steps.",
      "Use meeting history, account context, documents, and search to prepare for customer check-ins, escalations, renewals, and handoffs.",
      "After meetings, review summaries, action items, follow-ups, account health, and shared links before sending customer-facing updates.",
      "If your team wants expansion, churn-risk, or playbook-grading signals, ask an admin to configure the right reporting fields or rubrics.",
    ],
    "Spectator and viewer setup": [
      "Confirm the person should only view selected meetings, reports, or shared links rather than use daily Ergo workflows.",
      "Ask a primary or secondary admin to add or convert the person as a spectator or grant limited viewer access.",
      "Grant only the team, meeting, report, dashboard, folder, or shared-link visibility they need.",
      "Give managers and executives a dashboard walkthrough for deal health, team pipeline, call recordings, summaries, reporting, and AI questions; they usually do not need to configure CRM or email.",
      "Have the viewer sign in to the correct workspace and verify the exact page, dashboard, report, or link they should use.",
      "Review access after team changes, role changes, or when a shared link should be revoked.",
    ],
    "Connect your CRM": [
      "Choose the CRM your workspace uses: Salesforce, HubSpot, Attio, Pipedrive, or Ergo CRM.",
      "Connect with an account that has permission to read and update the records Ergo should manage.",
      "Complete field mapping before expecting CRM updates to write back.",
      "Verify pipeline and stage mappings before using deal automation.",
    ],
    "Connect email and calendar": [
      "Choose Google Workspace or Microsoft 365.",
      "Grant the requested email and calendar scopes.",
      "Confirm Ergo can see the calendar that contains customer meetings.",
      "Reconnect if Ergo shows an expired grant or meetings stop appearing.",
    ],
    "Notetaker setup": [
      "Choose the notetaker source your workspace will use.",
      "Connect calendar first so Ergo can detect upcoming meetings.",
      "Confirm which meetings Ergo should join automatically.",
      "Use Add Bot to Meeting when you need Ergo to join an external link manually.",
    ],
    "CRM properties setup": [
      "Review the CRM properties Ergo needs to read and update.",
      "Confirm property names, types, and permissions in your CRM.",
      "Map each required property in Ergo.",
      "Test with one deal before relying on automated updates.",
    ],
    "Pipeline stages": [
      "Select the CRM pipeline Ergo should use.",
      "Review each stage and its meaning.",
      "Confirm default stages and AI descriptions match your sales process.",
      "Resolve stage drift before expecting clean updates.",
    ],
    "Workspace configuration": [
      "Review workspace defaults before inviting the wider team.",
      "Confirm email, calendar, collaboration, and meeting settings match the way your team works.",
      "Ask admins to check team-level settings when users see different defaults.",
      "Revisit workspace configuration after changing CRM, Slack, or notetaker setup.",
    ],
    "Email templates setup": [
      "Review default templates before post-call drafts begin generating.",
      "Create or edit templates for the common follow-up situations your team handles.",
      "Test one draft against a recent meeting to confirm tone and structure.",
      "Update templates when your sales motion or customer-facing language changes.",
    ],
    "Collaboration tools setup": [
      "Decide which collaboration tools Ergo should use for context, delivery, or support workflows.",
      "Connect Slack, Beeper, or Pylon only where those tools are part of the customer workflow.",
      "Confirm the channels, inboxes, or queues Ergo should use.",
      "Test one workflow before relying on collaboration delivery for the team.",
    ],
    "User sync": [
      "Connect the workspace account that contains the users Ergo should sync.",
      "Review the synced user list before provisioning access.",
      "Map users to the right teams and roles.",
      "Re-sync after team or directory changes.",
    ],
    "Company details": [
      "Enter the company and workspace details Ergo should use in generated outputs.",
      "Review domain, naming, and account information for accuracy.",
      "Update details when the company name, domain, or operating context changes.",
      "Check generated drafts and reports after major company-detail updates.",
    ],
    "Meeting title phrases": [
      "List phrases that help Ergo identify customer-facing meetings.",
      "Include common naming patterns used by your sales, success, or account teams.",
      "Review false positives and false negatives after the first week of usage.",
      "Adjust phrases when your team changes calendar naming conventions.",
    ],
    "Pricing configuration": [
      "Review which pricing fields or deal data Ergo should understand.",
      "Confirm pricing-related CRM properties are mapped correctly.",
      "Use test deals before relying on pricing fields in reports or CRM updates.",
      "Update pricing configuration when packaging or pricing changes.",
    ],
    "Advanced settings": [
      "Review advanced settings only after the core setup is complete.",
      "Change one setting at a time when possible.",
      "Test the workflow affected by the setting after saving.",
      "Document organization-specific choices for future admins.",
    ],
    "Reporting defaults": [
      "Choose the default dashboards, cadences, or reporting fields your team should start with.",
      "Confirm reporting access for the people who need to view dashboards.",
      "Test one report before scheduling recurring delivery.",
      "Adjust defaults after the team has enough data in Ergo.",
    ],
    Salesforce: [
      "Connect Salesforce from Integrations using an account with the right object and field permissions.",
      "Map CRM properties before expecting updates to write back.",
      "Confirm pipeline and stage settings match the Salesforce sales process.",
      "Reconnect Salesforce if grants expire or sync behavior changes.",
    ],
    "HubSpot": [
      "Connect HubSpot from Integrations with an account that can read and update the intended objects.",
      "Map properties and pipeline stages before expecting writeback.",
      "Check company and deal naming when a record is hard to find.",
      "Verify meeting activities and recording links after the first recorded meeting.",
    ],
    "HubSpot meeting activities and recording links": [
      "Open the HubSpot company, contact, or deal associated with the meeting.",
      "Look for the meeting activity created or updated by Ergo.",
      "Use the View Meeting in Ergo link when it appears in the activity.",
      "Remember that audio availability depends on the meeting source; some external notetakers may not provide audio to Ergo.",
    ],
    "Attio": [
      "Connect Attio from Integrations with an account that has access to the records Ergo should use.",
      "Review mapped fields before enabling CRM updates.",
      "Confirm companies, people, and deals are named consistently.",
      "Test one record before rolling out broader automation.",
    ],
    "Pipedrive": [
      "Connect Pipedrive from Integrations.",
      "Review pipelines, stages, and mapped properties.",
      "Confirm the connected account can update the intended records.",
      "Test one deal before using Pipedrive updates across the team.",
    ],
    "Ergo CRM": [
      "Use Ergo CRM when your workspace manages CRM records inside Ergo.",
      "Review company, deal, and stage setup before enabling automation.",
      "Confirm fields match your team's reporting needs.",
      "Test one deal workflow end to end.",
    ],
    "Google Workspace": [
      "Connect Google Workspace from setup or Integrations.",
      "Approve calendar and email scopes.",
      "Confirm customer meetings are on the connected calendar.",
      "Reconnect Google Workspace if Ergo stops seeing meetings or drafts cannot sync.",
    ],
    "Calendar scopes and meeting auto-join": [
      "Confirm the correct calendar account is connected.",
      "Make sure calendar scopes were accepted during connection.",
      "Check that customer meetings appear on the connected calendar.",
      "Use Add Bot to Meeting for external or missed links.",
    ],
    "Microsoft 365": [
      "Connect Microsoft 365 from setup or Integrations.",
      "Approve the requested email and calendar permissions.",
      "Confirm the connected calendar contains the meetings Ergo should see.",
      "Reconnect Microsoft 365 if meetings or drafts stop syncing.",
    ],
    "Expired grants and reconnecting": [
      "Open Integrations and find the disconnected or expired integration.",
      "Reconnect with the same account when possible.",
      "Approve every required scope during the reconnect flow.",
      "Re-test the workflow that was blocked, such as meeting detection, draft sync, or Slack delivery.",
    ],
    Slack: [
      "Connect Slack from Integrations.",
      "Confirm Ergo has access to the channels where customer context or delivery should happen.",
      "Add Ergo to new customer channels when the channel should be monitored or used for context.",
      "Reconnect Slack if channel lists, pre-call context, or delivery stops working.",
    ],
    "Slack monitoring and pre-call context": [
      "Connect Slack and confirm Ergo has access to the customer channels that matter.",
      "Add Ergo to new customer channels before expecting pre-call context from those channels.",
      "Check whether Slack Connect or private-channel permissions affect visibility.",
      "Review duplicate or missing pre-call context with support when channel setup looks correct.",
    ],
    "Beeper": [
      "Confirm Beeper is enabled for your workspace.",
      "Connect Beeper from Integrations when your team uses it for customer communication.",
      "Verify which customer conversations Ergo should use.",
      "Test a small workflow before relying on Beeper context.",
    ],
    "Pylon": [
      "Connect Pylon from Integrations.",
      "Confirm the queues or customer issues Ergo should use.",
      "Check delivery and duplicate behavior after the first workflow runs.",
      "Contact support if customer issues are not appearing or deliveries repeat unexpectedly.",
    ],
    "Ergo Notetaker": [
      "Connect calendar before enabling automatic joins.",
      "Confirm which meeting types Ergo should join.",
      "Make sure the meeting host admits the bot when a waiting room is enabled.",
      "Use Add Bot to Meeting for manual dispatch.",
    ],
    "Ergo Desktop Notetaker": [
      "Install Ergo Desktop and sign in.",
      "Grant required desktop permissions.",
      "Run a test recording before customer calls.",
      "Use desktop troubleshooting if detection, stopping, or upload does not work as expected.",
    ],
    "Gong": [
      "Connect Gong from Integrations when your team uses Gong as a meeting source.",
      "Confirm which meetings and recordings Ergo can access from Gong.",
      "Check whether summaries, insights, and drafts differ from Ergo Notetaker outputs.",
      "Test one meeting before relying on Gong data in reporting or CRM updates.",
    ],
    "Fireflies": [
      "Connect Fireflies from Integrations when your team uses it as a meeting source.",
      "Confirm which recordings and transcripts Ergo can access.",
      "Check output differences compared with Ergo Notetaker.",
      "Avoid connecting duplicate notetaker sources unless your team understands the output ownership.",
    ],
    "Circleback": [
      "Connect Circleback from Integrations when your team uses Circleback as a meeting source.",
      "Confirm which meetings should flow into Ergo.",
      "Review whether Circleback and Ergo Notetaker are both active for the same meetings.",
      "Use multiple-notetaker guidance if duplicate outputs appear.",
    ],
    "BlueDot": [
      "Connect BlueDot from Integrations.",
      "Confirm which meetings Ergo can access through BlueDot.",
      "Review expected transcript and recording availability.",
      "Test one meeting before relying on BlueDot-sourced outputs.",
    ],
    "Fathom": [
      "Connect Fathom from Integrations.",
      "Confirm the meetings and users Ergo should ingest.",
      "Review output differences compared with Ergo Notetaker.",
      "Test one meeting before using Fathom data in CRM or reporting workflows.",
    ],
    "Granola": [
      "Connect Granola only when your team wants Granola notes to flow into Ergo.",
      "Avoid connecting Granola and Ergo Notetaker to the same workflow unless you expect both sources.",
      "Disconnect Granola from Ergo if duplicate drafts or duplicated context appear.",
      "Use Ergo Desktop connected to Ergo when you want Ergo automations to run from desktop capture.",
    ],
    "Outreach": [
      "Confirm Outreach is enabled for your workspace.",
      "Connect Outreach from Integrations.",
      "Review which dialer or outreach activities should influence Ergo context.",
      "Test one workflow before rolling it out to the team.",
    ],
    "Nooks": [
      "Confirm Nooks is enabled for your workspace.",
      "Connect Nooks from Integrations.",
      "Review which dialer activities should influence Ergo context.",
      "Test one workflow before rolling it out to the team.",
    ],
    "Salesfinity": [
      "Confirm Salesfinity beta access for your workspace.",
      "Connect Salesfinity from Integrations.",
      "Review expected dialer activity and context behavior.",
      "Contact support if beta behavior does not match your team's workflow.",
    ],
    "MCP/external agent tools": [
      "Confirm your workspace has access to external agent tooling.",
      "Use the provided setup path for the agent or client you are connecting.",
      "Verify that the connected tool can see the intended Ergo context.",
      "Contact support for beta access, setup, or troubleshooting.",
    ],
    "Schedule or cancel the notetaker": [
      "Open the upcoming meeting in Ergo.",
      "Schedule the notetaker if Ergo should join.",
      "Cancel the notetaker if Ergo should not join.",
      "For meetings that changed time or link, verify the meeting again after the calendar update syncs.",
    ],
    "Notetaker waiting-room admission guide": [
      "Tell the meeting host to admit the Ergo bot from the waiting room.",
      "If the bot is removed, use Add Bot to Meeting to dispatch it again when available.",
      "Check whether the meeting moved to another calendar or link.",
      "If the bot still cannot join, contact support with the meeting link and time.",
    ],
    "What happens when a meeting is rescheduled": [
      "Update the calendar event with the new time or link.",
      "Check the meeting in Ergo after the calendar update syncs.",
      "Use Add Bot to Meeting if the meeting is starting soon or the bot did not re-dispatch.",
      "For recurring meetings, verify the specific occurrence that changed.",
    ],
    "Add the bot to a live or ad hoc meeting": [
      "Copy the Zoom, Google Meet, or Microsoft Teams link.",
      "Open Add Bot to Meeting from the meetings area.",
      "Paste the meeting link and dispatch Ergo.",
      "Confirm the bot appears in the meeting and admit it if there is a waiting room.",
    ],
    "Meeting processing time and status states": [
      "Open the meeting detail page after the call ends.",
      "Check whether the recording, transcript, summary, insights, and drafts are each available.",
      "Wait for processing to complete before retrying or reporting missing outputs.",
      "Contact support if processing remains stuck or a required output is missing after the expected window.",
    ],
    "Why some meetings do not generate insights or drafts": [
      "Check whether the meeting was classified as a sales meeting.",
      "Check which notetaker source captured the meeting.",
      "Confirm email/calendar are connected for draft generation.",
      "Use post-call instructions to guide drafting behavior, but do not rely on instructions as a hard filter unless configured that way.",
    ],
    "Recording disclaimer": [
      "Review the disclaimer before recording meetings.",
      "Ask an admin which default disclaimer your workspace uses.",
      "Adjust the disclaimer only if your role has permission.",
      "Confirm your team follows the recording rules required for your customers and regions.",
    ],
    "Meeting availability and visibility": [
      "Confirm the meeting is on a connected calendar.",
      "Check whether the viewer has access to the meeting, folder, or shared link.",
      "Ask an admin to review global meeting access when a team member needs broader visibility.",
      "Use support if the meeting exists but the expected viewer cannot access it.",
    ],
    "Dashboard/upcoming meetings": [
      "Open the Dashboard to review upcoming meetings.",
      "Confirm meetings appear from the connected calendar.",
      "Check notetaker status before customer calls.",
      "Use the meeting detail page after the meeting is processed.",
    ],
    "One bot per org: shared notetaking behavior": [
      "Confirm whether your workspace uses a shared organization-level bot.",
      "Do not expect a separate bot identity for every user.",
      "Coordinate host admission when multiple team members attend the same meeting.",
      "Use admin settings for broader meeting access and visibility.",
    ],
    "Recurring meetings": [
      "Review the specific recurring occurrence in Ergo.",
      "Confirm the date, time, and meeting link for the occurrence.",
      "Use Add Bot to Meeting if a changed occurrence does not dispatch correctly.",
      "Check recurring meetings after calendar edits or ownership changes.",
    ],
    "Skip internal meetings": [
      "Review how your workspace identifies internal meetings.",
      "Confirm internal domains and meeting-title patterns.",
      "Check skipped meetings before assuming the notetaker failed.",
      "Update rules when your team changes naming or domain conventions.",
    ],
    "Meeting filter: what sales-only processing means": [
      "Review which meeting types should receive sales insights or drafts.",
      "Check whether a meeting was classified as sales or non-sales.",
      "Use instructions and settings to guide classification where available.",
      "Contact support if classification repeatedly misses your expected sales calls.",
    ],
    "Summary emails and recording links": [
      "Confirm email is connected for the users who should receive summaries.",
      "Check the meeting detail page for recording and share links.",
      "Review recipient and access settings before forwarding links.",
      "Use support if emails are missing but the meeting processed successfully.",
    ],
    "Auto-delete meetings": [
      "Open admin meeting settings.",
      "Review whether auto-delete is enabled and what retention window applies.",
      "Confirm the setting with stakeholders before enabling it.",
      "Use sharing and download options before content is deleted when needed.",
    ],
    "Meeting history and folders": [
      "Open Meetings to browse past meetings.",
      "Use folders or filters to find customer, team, or user-specific meetings.",
      "Check permissions if a meeting is missing for one viewer.",
      "Use global meeting access only when broad visibility is appropriate.",
    ],
    "Meeting detail page": [
      "Open a processed meeting from Dashboard, Meetings, a link, or a CRM activity.",
      "Review recording, transcript, summary, insights, action items, and drafts separately.",
      "Use Ask AI or sharing controls when available.",
      "Report the meeting if a specific output is missing or incorrect.",
    ],
    "Video, transcript, and action items": [
      "Open the meeting detail page after processing.",
      "Review the video or recording first when transcript context looks incomplete.",
      "Use action items to confirm next steps before sending follow-ups.",
      "Contact support if one output is missing while others are available.",
    ],
    "Ask AI about a meeting": [
      "Open the meeting detail page.",
      "Ask a specific question about the meeting, such as objections, next steps, or follow-up points.",
      "Review the source context before acting on the answer.",
      "Use a narrower question if the first answer is too broad.",
    ],
    "Share/revoke/password-protect meetings": [
      "Open the meeting sharing controls.",
      "Choose the access level and password settings.",
      "Share the link only with the intended recipients.",
      "Revoke access when the link should no longer be available.",
    ],
    "Create and share clips": [
      "Open the meeting recording.",
      "Select the moment or range to clip.",
      "Create the clip and review it before sharing.",
      "Use sharing controls to revoke access when needed.",
    ],
    "Upload external recordings": [
      "Open the upload flow for external recordings.",
      "Choose the recording file and attach the right meeting or customer context.",
      "Wait for processing before expecting transcript or summary outputs.",
      "Contact support if upload or processing fails.",
    ],
    "Manual notes": [
      "Create a manual note when there is no recorded meeting or transcript.",
      "Attach the note to the right customer, deal, or meeting when possible.",
      "Use the note as context for follow-up and reporting workflows.",
      "Review permissions before sharing manual notes.",
    ],
    "Push notes or meetings to automations": [
      "Open the note or meeting you want to use.",
      "Choose the automation destination, such as Slack, Pylon, or CRM.",
      "Review the generated payload before sending when the workflow allows it.",
      "Check delivery status after the automation runs.",
    ],
    "Delete/retry processing": [
      "Open the affected meeting or note.",
      "Use retry processing when the page offers that action.",
      "Delete only when you are sure the content should be removed.",
      "Contact support when retry does not recover the missing output.",
    ],
    "Using multiple notetakers with Ergo": [
      "Decide which notetaker source should drive Ergo automations.",
      "Avoid connecting multiple notetakers to the same workflow when possible.",
      "If you keep another notetaker for internal use, disconnect it from Ergo when duplicate drafts appear.",
      "Use Ergo Desktop or Ergo Notetaker as the connected source when you want Ergo outputs and automations.",
    ],
    "Install and sign in to Ergo Desktop": [
      "Download and install Ergo Desktop.",
      "Sign in with the same account you use for Ergo in the browser.",
      "Complete macOS permission prompts.",
      "Run a short test recording before relying on desktop capture for customer meetings.",
    ],
    "macOS permissions": [
      "Open macOS System Settings.",
      "Grant the permissions Ergo Desktop requests, such as microphone and accessibility permissions when prompted.",
      "Restart Ergo Desktop after changing permissions.",
      "Run a test meeting to confirm detection and upload work.",
    ],
    "Troubleshoot missed detection or upload failures": [
      "Confirm Ergo Desktop was open and signed in during the meeting.",
      "Check macOS permissions and network connectivity.",
      "Verify the meeting app and audio source were detectable.",
      "Contact support with the meeting time, desktop version, and whether a recording file exists.",
    ],
    "Desktop onboarding checklist": [
      "Install Ergo Desktop and sign in.",
      "Grant required macOS permissions.",
      "Run a short test recording.",
      "Confirm upload and processing complete before relying on desktop capture.",
    ],
    "Quick Note": [
      "Open Quick Note from Ergo Desktop.",
      "Capture the note while working or after a call.",
      "Attach relevant customer, deal, or meeting context when possible.",
      "Review where the note appears in Ergo after saving.",
    ],
    "Silent desktop recording": [
      "Confirm your workspace allows silent desktop recording.",
      "Start or verify desktop capture before the meeting.",
      "Check recording status during and after the meeting.",
      "Review recording/privacy expectations with your team.",
    ],
    "Live transcript and mute controls": [
      "Open the live transcript controls in Ergo Desktop.",
      "Use mute controls when audio should not be captured.",
      "Review transcript availability after the meeting ends.",
      "Contact support if transcript capture does not match the recording.",
    ],
    "Desktop settings and updates": [
      "Open Ergo Desktop settings.",
      "Review account, recording, permissions, and update status.",
      "Install updates when prompted.",
      "Re-test capture after changing settings or updating the app.",
    ],
    "Desktop performance requirements and current limitations": [
      "Review supported meeting and recording workflows before relying on desktop capture.",
      "Keep Ergo Desktop open while meetings are running.",
      "Use a stable network connection for upload.",
      "Contact support if performance issues repeat after updating and checking permissions.",
    ],
    "Deals board overview": [
      "Open Deals to see active opportunities.",
      "Choose the relevant pipeline or view.",
      "Use filters and sorting to narrow the board.",
      "Open a deal to review CRM, meeting, email, and document context.",
    ],
    "Pipeline/view selector": [
      "Open the Deals board.",
      "Select the pipeline or saved view you want to inspect.",
      "Confirm filters before making bulk decisions.",
      "Save or update views when the same slice is used repeatedly.",
    ],
    "Kanban and list views": [
      "Choose Kanban for stage-based scanning.",
      "Choose list view for dense sorting and comparison.",
      "Apply filters before reviewing large pipelines.",
      "Open the deal detail page for full context.",
    ],
    "Search/filter/sort deals": [
      "Use search for known company, deal, or contact names.",
      "Use filters for pipeline, owner, stage, health, or time range.",
      "Sort when comparing deal lists.",
      "Clear filters if expected deals disappear.",
    ],
    "Custom views and Ergo View": [
      "Create a view from filters and columns your team uses often.",
      "Name the view clearly.",
      "Use Ergo View when you want an AI-assisted workspace view.",
      "Review saved views after CRM schema or pipeline changes.",
    ],
    "Add/edit deals": [
      "Open the Deals workspace.",
      "Add or edit a deal if your role and CRM permissions allow it.",
      "Confirm company, owner, stage, and pipeline before saving.",
      "Check CRM sync status after editing.",
    ],
    "How Ergo names and matches CRM records": [
      "Check the meeting title, company name, domain, and CRM associations.",
      "Confirm the company or deal name in CRM matches the expected customer.",
      "Search by alternate names if a record is hard to find.",
      "Update CRM naming or associations when Ergo matched the wrong record.",
    ],
    "Company board": [
      "Open the company view from Deals or CRM workspace.",
      "Filter by owner, status, health, or recent activity.",
      "Open a company to review related deals, meetings, emails, and documents.",
      "Check CRM sync if company data looks stale.",
    ],
    "Deal detail": [
      "Open a deal from the board, search, or related company.",
      "Review health, stage, activity, emails, meetings, and documents.",
      "Check AI summaries against source tabs before acting.",
      "Update CRM fields only after confirming the right deal.",
    ],
    "Company detail": [
      "Open the company record from the board, search, or a deal.",
      "Review related people, deals, meetings, emails, and documents.",
      "Check domains and alternate emails when matching looks wrong.",
      "Use CRM sync troubleshooting if company details are stale.",
    ],
    "Deal and account health": [
      "Open the deal or company detail page.",
      "Review health indicators and the source activity behind them.",
      "Compare health with recent meetings, emails, and CRM updates.",
      "Use the signal as guidance, not a replacement for account judgment.",
    ],
    "AI deal/account overviews": [
      "Open the deal or company detail page.",
      "Read the AI overview alongside source activity.",
      "Check meetings, emails, and documents when an overview looks incomplete.",
      "Use feedback or support when the overview cites the wrong context.",
    ],
    "Activity, emails, meetings, and documents tabs": [
      "Open a deal or company detail page.",
      "Use each tab to inspect a different source of context.",
      "Check timestamps when data appears stale.",
      "Use related troubleshooting if a tab is empty unexpectedly.",
    ],
    "Bulk actions": [
      "Filter the record list before selecting items.",
      "Review selected records carefully.",
      "Run the bulk action only when the set is correct.",
      "Check completion or error states after the action runs.",
    ],
    "Bulk email/Slack drafts": [
      "Filter the target deals or accounts.",
      "Generate drafts for the selected audience.",
      "Review the drafts before sending or posting.",
      "Use bulk sending only when the message and recipients are correct.",
    ],
    "Reminders and follow-up view": [
      "Open Follow-ups or the deal follow-up view.",
      "Review reminders by due date, customer, or owner.",
      "Complete, snooze, or update follow-ups as needed.",
      "Check email/calendar context when a follow-up looks unexpected.",
    ],
    "Field Mapping overview": [
      "Connect your CRM first.",
      "Review required properties, pipeline, stages, and permissions.",
      "Map Ergo fields to CRM fields before expecting updates.",
      "Resolve drift or permission issues before enabling broad automation.",
    ],
    "Field mapping setup: required before CRM updates work": [
      "Confirm CRM connection and admin permissions.",
      "Map required properties for deals, companies, meetings, and reporting.",
      "Validate pipeline and stage mappings.",
      "Test updates on one record before relying on automation across the team.",
    ],
    "CRM properties": [
      "Review which CRM properties Ergo uses.",
      "Confirm each property exists in the CRM and has the expected type.",
      "Check field permissions for the account connected to Ergo.",
      "Sync or remap properties when the CRM schema changes.",
    ],
    "Stage drift resolution": [
      "Compare the stages in Ergo with the stages in your CRM.",
      "Identify renamed, deleted, reordered, or newly created stages.",
      "Update mappings so Ergo and the CRM agree.",
      "Re-test one deal after resolving drift.",
    ],
    "Property permissions": [
      "Check the connected CRM account's permissions.",
      "Confirm it can read and update the mapped property.",
      "Adjust permissions in the CRM if needed.",
      "Re-sync or test the mapped field after permission changes.",
    ],
    "Create/sync CRM properties": [
      "Create required properties in the CRM when they do not exist.",
      "Sync properties back into Ergo.",
      "Map the synced properties to the right Ergo fields.",
      "Test one record before relying on automated updates.",
    ],
    "Pipelines": [
      "Review which CRM pipelines Ergo should use.",
      "Select the correct pipeline for each workflow.",
      "Confirm stages and defaults before enabling updates.",
      "Revisit pipeline settings after CRM changes.",
    ],
    "Stage definitions and AI descriptions": [
      "Review the meaning of each stage.",
      "Write clear descriptions that match your team's sales process.",
      "Use AI descriptions to guide classification and reporting.",
      "Update descriptions when stage definitions change.",
    ],
    "Default stages": [
      "Choose the stages Ergo should use by default.",
      "Confirm the defaults match your CRM pipeline.",
      "Review downstream reporting before changing defaults.",
      "Test after saving stage changes.",
    ],
    "Reorder/delete stages": [
      "Review active pipeline usage before changing stages.",
      "Reorder stages to match the CRM.",
      "Delete only stages that are no longer used.",
      "Resolve drift after stage changes.",
    ],
    "Stage controls": [
      "Review which controls are available for each stage.",
      "Set controls according to your team's process.",
      "Test stage movement on one deal.",
      "Adjust controls when CRM behavior changes.",
    ],
    "Restrict to pipeline": [
      "Choose the pipeline that should be eligible for the workflow.",
      "Apply the restriction before enabling automation.",
      "Check excluded pipelines when expected records do not update.",
      "Review the setting after CRM pipeline changes.",
    ],
    "Company info": [
      "Review company fields used for matching and reporting.",
      "Confirm names, domains, and owner fields.",
      "Update CRM data when company matching looks wrong.",
      "Re-sync after changing company fields.",
    ],
    "Alternate domains/emails": [
      "Add alternate domains or emails when customers use multiple identities.",
      "Use this to improve matching across meetings, emails, and CRM records.",
      "Review duplicates before adding alternates.",
      "Test matching after changes.",
    ],
    "Partnership domains": [
      "Add partner domains when partner activity should be associated differently from customer activity.",
      "Review whether the domain should be treated as partner, customer, or internal context.",
      "Test related matching behavior.",
      "Revisit the list as partnerships change.",
    ],
    "Meeting-title AI boost": [
      "Add meeting-title phrases that help identify relevant customer meetings.",
      "Use common title patterns from your team calendar.",
      "Review classifications after adding phrases.",
      "Adjust phrases when false positives appear.",
    ],
    "Advanced CRM toggles": [
      "Review advanced CRM toggles with an admin.",
      "Change one toggle at a time.",
      "Test the affected workflow after saving.",
      "Document organization-specific toggle choices.",
    ],
    "Deal qualification": [
      "Review the criteria Ergo should use for qualification.",
      "Confirm the CRM fields and meeting context that support qualification.",
      "Test with a known qualified and unqualified deal.",
      "Adjust criteria when your sales process changes.",
    ],
    "Backfill CRM fields from historical meetings": [
      "Confirm whether the field needs a live sync or a historical backfill.",
      "Review current product support before expecting automatic backfill.",
      "Use deal-by-deal review or exported meeting context when native backfill is unavailable.",
      "Contact support for high-volume backfill needs or data migration planning.",
    ],
    "Turn post-call drafts on or off": [
      "Open email or post-call preferences.",
      "Choose whether Ergo should create follow-up drafts.",
      "Use instructions to guide tone and eligibility.",
      "Disable draft creation for users or workflows that should not receive drafts.",
    ],
    "Failed drafts retry/report": [
      "Open the failed draft alert or draft queue.",
      "Check whether email is connected and grants are valid.",
      "Retry the draft when the cause is resolved.",
      "Report the failed draft if retry does not work.",
    ],
    "Drafts inbox": [
      "Open Drafts to review generated and manual drafts.",
      "Use tabs or queues to find drafts by state.",
      "Review AI-generated content before sending.",
      "Dismiss drafts that should not be sent.",
    ],
    "Draft tabs and queues": [
      "Open Drafts and choose the relevant tab.",
      "Use queues to separate needs-review, failed, scheduled, sent, or dismissed drafts.",
      "Clear filters if expected drafts are missing.",
      "Use failed-draft troubleshooting for retry or report actions.",
    ],
    "Draft email logic: when drafts are created and how to dismiss": [
      "Confirm meeting source, meeting type, and email connection.",
      "Review whether workspace preferences allow post-call drafts.",
      "Dismiss drafts that should not be used.",
      "Tune instructions or turn drafts off when repeated drafts are not useful.",
    ],
    "Compose a new email": [
      "Open Drafts and start a new email.",
      "Choose the recipient and related customer context.",
      "Write or generate the draft.",
      "Review before sending or scheduling.",
    ],
    "Review/edit AI drafts": [
      "Open the generated draft.",
      "Review tone, facts, next steps, and recipients.",
      "Edit anything that should not be sent as written.",
      "Send, schedule, dismiss, or reprompt the draft.",
    ],
    "Reprompt drafts with AI": [
      "Open the draft you want to improve.",
      "Give Ergo a specific instruction such as shorter, warmer, more detailed, or focused on next steps.",
      "Review the rewritten draft against the meeting context.",
      "Send only after confirming accuracy.",
    ],
    "Thread history and related threads": [
      "Open the draft or email thread.",
      "Review previous messages and related threads.",
      "Check whether the generated draft references the right context.",
      "Use related context to edit or reprompt the draft.",
    ],
    "Send/schedule/unschedule/undo": [
      "Review the draft and recipients.",
      "Choose send, schedule, unschedule, or undo when available.",
      "Confirm email connection is healthy.",
      "Check the sent flow or email client after sending.",
    ],
    "Attachments, images, and links": [
      "Add attachments, images, or links before sending.",
      "Confirm recipients should have access to linked content.",
      "Review formatting in the draft.",
      "Send a test when the content is high-impact.",
    ],
    "Dismiss/disqualify drafts": [
      "Open the draft that should not be sent.",
      "Dismiss or disqualify it with the appropriate reason when available.",
      "Use instructions or settings to reduce repeated unwanted drafts.",
      "Check whether the meeting type should be excluded from draft generation.",
    ],
    "Go Mode and bulk sending": [
      "Confirm Go Mode or bulk sending is enabled for your workspace.",
      "Review the recipient set and generated drafts.",
      "Send only after confirming tone, timing, and targeting.",
      "Monitor sent and failed states after launch.",
    ],
    "Open tracking and sent flow": [
      "Open the sent email browser or sent state.",
      "Review sent status and open tracking where available.",
      "Remember that tracking can be affected by recipient email settings.",
      "Use reporting or follow-up views for next-step workflows.",
    ],
    "Team access to email drafts": [
      "Confirm which team members should see each user's drafts.",
      "Review role and team access before granting visibility.",
      "Check whether drafts are user-private, team-visible, or admin-visible in your workspace.",
      "Contact support if access looks correct but drafts are hidden.",
    ],
    "Email signatures and draft footers": [
      "Confirm the user's email signature source.",
      "Check whether Ergo is pulling signatures from Google Workspace, Microsoft 365, or another configured tool.",
      "Review generated drafts for unwanted footers or watermarks.",
      "Contact support if signatures or footers do not match workspace settings.",
    ],
    "Templates overview": [
      "Open Templates to review available email templates.",
      "Identify which templates apply to common follow-up scenarios.",
      "Edit templates when tone or structure changes.",
      "Test template output with a recent meeting.",
    ],
    "Create/edit templates": [
      "Open Templates and choose create or edit.",
      "Write the template with reusable structure and variables.",
      "Preview output before saving.",
      "Test the template in a draft workflow.",
    ],
    "AI template builder": [
      "Open the AI template builder.",
      "Describe the follow-up scenario and tone.",
      "Review the generated template carefully.",
      "Save only after confirming variables and wording.",
    ],
    "Sent email browser": [
      "Open the sent email browser.",
      "Filter by user, date, customer, or state when available.",
      "Open sent emails to review context and outcomes.",
      "Use troubleshooting if sent emails are missing unexpectedly.",
    ],
    "Auto-send settings": [
      "Review auto-send settings with an admin.",
      "Confirm which workflows are eligible for auto-send.",
      "Test with low-risk workflows before expanding.",
      "Monitor failures and customer replies after enabling auto-send.",
    ],
    "Upload user/org Knowledge Base docs": [
      "Open Knowledge Base or Documents.",
      "Upload user-scoped or org-scoped documents.",
      "Wait for processing before expecting Ergo to use the document.",
      "Review scope and permissions before using docs in customer workflows.",
    ],
    "Document scopes/status/retry/delete/download": [
      "Open the document record.",
      "Review scope, processing status, and linked objects.",
      "Retry processing or download when available.",
      "Delete only when the document should no longer be used as context.",
    ],
    "Generated documents": [
      "Open generated documents from the Docs area or linked deal.",
      "Review the source context and output.",
      "Edit or regenerate when the document is incomplete.",
      "Share only after confirming permissions and accuracy.",
    ],
    "Link documents to deals": [
      "Open the document or deal.",
      "Choose the deal the document should support.",
      "Confirm the linked deal is correct.",
      "Review deal context after linking.",
    ],
    "Share/revoke documents": [
      "Open document sharing controls.",
      "Choose the intended access level.",
      "Share the link with the right recipients.",
      "Revoke access when the document should no longer be available.",
    ],
    "Post-call custom instructions": [
      "Open post-call instructions.",
      "Write clear instructions for how Ergo should summarize, draft, or update context.",
      "Test instructions on one meeting.",
      "Adjust when outputs repeat the wrong emphasis.",
    ],
    "Team/user post-call instructions": [
      "Decide whether the instruction should apply to one user or the team.",
      "Add instructions at the correct level.",
      "Test with one meeting for the affected user or team.",
      "Review outputs after changing team-level instructions.",
    ],
    "Post-call reference docs and summaries": [
      "Upload or select reference docs that should guide post-call outputs.",
      "Confirm scope and processing status.",
      "Review summaries against the reference material.",
      "Update reference docs when messaging or process changes.",
    ],
    "Chat with Ergo": [
      "Open Chat.",
      "Ask a specific question about meetings, deals, emails, documents, or reports.",
      "Review sources and actions before acting on the answer.",
      "Refine the prompt if the answer is too broad.",
    ],
    "Understanding sources/actions in chat": [
      "Review the sources Ergo cites in a chat answer.",
      "Check actions before approving or relying on them.",
      "Open source records when an answer looks surprising.",
      "Contact support if sources point to the wrong customer context.",
    ],
    "Floating agent panel": [
      "Open the floating agent panel from the relevant workspace area.",
      "Ask for help using the current deal, meeting, report, or document context.",
      "Review generated actions before applying them.",
      "Close or reset the panel when switching contexts.",
    ],
    "Using deal and meeting context": [
      "Name the deal, company, or meeting in your question.",
      "Ask for a specific answer, draft, summary, or next step.",
      "Review sources across meetings, email, CRM, and documents.",
      "Correct the context if Ergo picked the wrong record.",
    ],
    "Scheduled agent runs": [
      "Create a scheduled run for recurring summaries or workflows.",
      "Choose the schedule, prompt, and destination.",
      "Review the first run before relying on automation.",
      "Monitor run history for failures.",
    ],
    "Email/Slack delivery for scheduled runs": [
      "Choose email or Slack as the delivery destination.",
      "Confirm the account, channel, or recipient has access.",
      "Send a test or review the first scheduled delivery.",
      "Reconnect integrations if delivery stops.",
    ],
    "Scheduled run history and health": [
      "Open scheduled run history.",
      "Review successful, failed, and skipped runs.",
      "Open failed runs to understand the cause.",
      "Update prompts, schedule, or integrations when failures repeat.",
    ],
    "Search across meetings, emails, and documents": [
      "Open Search.",
      "Enter a specific customer, phrase, person, topic, or deal.",
      "Filter by source when needed.",
      "Open results to verify source context.",
    ],
    "Search filters/modes/results": [
      "Choose the search mode or filters that match what you need.",
      "Filter by meetings, emails, documents, or date range.",
      "Open the result before using it in a customer workflow.",
      "Clear filters when expected results are missing.",
    ],
    "Follow-ups panel": [
      "Open Follow-ups.",
      "Review due, overdue, and upcoming follow-ups.",
      "Open related meeting, email, or deal context.",
      "Complete, snooze, or update the follow-up.",
    ],
    "Reporting overview": [
      "Open Reporting.",
      "Choose the dashboard, report, or chart you want to review.",
      "Check filters and date ranges before interpreting results.",
      "Share only dashboards or charts with appropriate access.",
    ],
    "Default dashboards": [
      "Open the default dashboard.",
      "Review the widgets and filters included.",
      "Use it as a baseline before creating custom dashboards.",
      "Ask an admin if the dashboard does not appear.",
    ],
    "Create/edit reports": [
      "Open Reporting and create or edit a report.",
      "Choose fields, filters, and time ranges.",
      "Preview results before saving.",
      "Share or schedule only after confirming the report answers the intended question.",
    ],
    "Chart builder": [
      "Open the chart builder.",
      "Choose the data source, fields, chart type, filters, and time range.",
      "Preview the chart before saving.",
      "Add it to a dashboard when it is ready for repeat use.",
    ],
    "Filters, time ranges, and drilldowns": [
      "Review the active filters before reading a chart.",
      "Set the time range to match the question.",
      "Use drilldowns to inspect underlying records.",
      "Clear filters when results look unexpectedly empty.",
    ],
    "Save widgets to dashboards": [
      "Build or open a chart widget.",
      "Choose the dashboard where it belongs.",
      "Save the widget and confirm placement.",
      "Review dashboard layout after saving.",
    ],
    "Share charts/dashboards": [
      "Open chart or dashboard sharing controls.",
      "Choose who should have access.",
      "Share the link or dashboard only with intended viewers.",
      "Revoke or adjust sharing when access changes.",
    ],
    "Reporting dashboard sharing and embedding troubleshooting": [
      "Check whether the dashboard has sharing enabled.",
      "Confirm the viewer has reporting access or the correct shared link.",
      "Review filters and embed settings if results look empty.",
      "Contact support when permissions look correct but the shared view fails.",
    ],
    "Custom reporting fields": [
      "Choose the custom field you want to report on.",
      "Confirm the field is populated and mapped correctly.",
      "Add the field to the report or chart.",
      "Validate results against known records.",
    ],
    "Picklist and numerical buckets": [
      "Choose the picklist or numerical field.",
      "Define buckets that match the reporting question.",
      "Preview the distribution before saving.",
      "Update buckets when the underlying field changes.",
    ],
    "Call grading rubrics": [
      "Define the rubric and scoring criteria.",
      "Confirm which calls the rubric should apply to.",
      "Preview scores against known examples.",
      "Update the rubric when coaching criteria change.",
    ],
    "Reporting: competitors, custom fields, and backfill": [
      "Confirm which fields or competitors should appear in reports.",
      "Check that the underlying fields are mapped and populated.",
      "Understand whether historical data is available or needs backfill.",
      "Contact support for high-volume reporting backfill needs.",
    ],
    "Reporting email cadences": [
      "Choose the report or dashboard to send.",
      "Set recipients, cadence, and filters.",
      "Preview the email before enabling the cadence.",
      "Review run history after the first delivery.",
    ],
    "Preview/run history": [
      "Open the reporting cadence or scheduled report.",
      "Preview the next output.",
      "Review run history for successful and failed sends.",
      "Update filters, recipients, or integration connections when failures appear.",
    ],
    "Notetaker adoption dashboard: reading edge cases": [
      "Open the notetaker adoption dashboard.",
      "Check which users, teams, and meetings are included.",
      "Review skipped, internal, missed, and manually dispatched meetings separately.",
      "Use the dashboard as a directional adoption view, not a replacement for meeting-level investigation.",
    ],
    "Cross-org analytics": [
      "Confirm your account has organization-level analytics access.",
      "Open cross-org analytics where enabled.",
      "Review organization filters before comparing data.",
      "Use care when sharing cross-org results.",
    ],
    "Admin dashboard overview": [
      "Open Admin.",
      "Review teams, members, roles, integrations, and access settings.",
      "Use Admin for organization-wide or team-level changes.",
      "Test user access after making changes.",
    ],
    "Organization and team hierarchy": [
      "Review the organization and team structure.",
      "Confirm which users belong to each team.",
      "Use hierarchy to control access and defaults.",
      "Update structure when teams change.",
    ],
    "Create/edit/delete teams": [
      "Open Admin teams.",
      "Create or edit teams to match your organization.",
      "Move members before deleting a team.",
      "Review access after team changes.",
    ],
    "Provision accounts": [
      "Open Admin members.",
      "Invite or provision users with the right role and team.",
      "Confirm required integrations or sync are available.",
      "Ask users to complete setup after provisioning.",
    ],
    "Add/remove/move members": [
      "Open Admin members.",
      "Add, remove, or move the member.",
      "Confirm their role and team after the change.",
      "Review access to meetings, drafts, reporting, and admin areas.",
    ],
    "Promote/demote/convert roles": [
      "Open Admin and find the member.",
      "Choose the new role or access level.",
      "Confirm which navigation areas and shared resources the change affects.",
      "Review access after saving the change.",
    ],
    "Spectator management": [
      "Open Admin and find the Spectator area or member list.",
      "Add, remove, or convert the spectator.",
      "Grant only the meeting or reporting access needed.",
      "Review access after team changes.",
    ],
    "Grant meeting/reporting access": [
      "Open Admin and find the member or team.",
      "Choose the meeting or reporting access they need.",
      "Confirm whether access is team-specific, global, or shared-link based.",
      "Ask the user to refresh and verify the page.",
    ],
    "Global meeting access": [
      "Open Admin meeting access settings.",
      "Confirm who needs cross-team meeting visibility.",
      "Enable global access only for the users or roles that need it.",
      "Review access periodically to avoid over-sharing meeting content.",
    ],
    "Sync CRM/settings to team members": [
      "Open Admin settings sync.",
      "Choose the CRM or settings to sync.",
      "Select the target team members.",
      "Ask users to verify setup after the sync completes.",
    ],
    "Default meeting summary settings": [
      "Open admin meeting summary settings.",
      "Choose default summary behavior for the organization or team.",
      "Test the setting on a meeting.",
      "Update defaults when your team's summary needs change.",
    ],
    "Recording disclaimer defaults": [
      "Open admin recording disclaimer settings.",
      "Review the default disclaimer language.",
      "Update only after confirming legal or customer requirements.",
      "Test a meeting to confirm the disclaimer appears as expected.",
    ],
    "Agent persona": [
      "Open admin agent persona settings.",
      "Describe the tone and behavior Ergo should use.",
      "Test generated outputs after changing persona.",
      "Adjust when outputs feel inconsistent with your team.",
    ],
    "Ergo enabled/status": [
      "Open Admin status settings.",
      "Check whether Ergo is enabled for the user, team, or workflow.",
      "Enable or disable only after confirming impact.",
      "Ask affected users to verify the change.",
    ],
    "Agent usage and billing": [
      "Open Admin usage or billing.",
      "Review current usage and plan details.",
      "Check which workflows or teams drive usage.",
      "Contact support for billing questions or plan changes.",
    ],
    "Impersonation": [
      "Use impersonation only when you have permission and a support reason.",
      "Confirm which user and workspace you are viewing.",
      "Avoid changing settings unless required.",
      "Exit impersonation after investigation.",
    ],
    "Sign-in and desktop callback issues": [
      "Confirm the user is signing into the correct workspace.",
      "Retry sign-in in the browser or desktop app.",
      "Check whether the desktop callback opens the app successfully.",
      "Contact support if the callback repeatedly fails.",
    ],
    "Dashboard setup errors": [
      "Check whether onboarding setup is complete.",
      "Confirm required integrations are connected.",
      "Refresh the dashboard after setup changes.",
      "Contact support if setup appears complete but dashboard errors remain.",
    ],
    "Slack Enterprise Grid channel listing issues": [
      "Confirm Slack is connected with the expected workspace or Enterprise Grid context.",
      "Check whether Ergo has access to the channel type.",
      "Reconnect Slack if channel lists are stale.",
      "Contact support if channels remain missing after reconnect.",
    ],
    "Slack disconnect/reconnect and stale channel mappings": [
      "Disconnect Slack only when you intend to reset the connection.",
      "Reconnect with the expected Slack account and workspace.",
      "Review channel mappings after reconnecting.",
      "Contact support if old mappings still affect channel lists or context.",
    ],
    "Add Ergo to new Slack customer channels": [
      "Open the customer Slack channel.",
      "Add Ergo or confirm Ergo has channel access.",
      "Verify the channel appears in Ergo where relevant.",
      "Test pre-call context or delivery after adding the channel.",
    ],
    "Pylon delivery failures, duplicate deliveries, and queue health": [
      "Confirm Pylon is connected.",
      "Check whether the affected issue, queue, or workflow is visible to Ergo.",
      "Review whether duplicate deliveries are one-time, repeated, or tied to a specific workflow.",
      "Contact support with the Pylon issue, workspace, and delivery time if duplicates or failures persist.",
    ],
    "Duplicate drafts from multiple notetakers": [
      "Check which meeting sources are connected to Ergo.",
      "Identify whether Ergo and another notetaker both captured the same meeting.",
      "Disconnect the external notetaker from Ergo if it should not create Ergo automations.",
      "Keep only one connected source for the workflow when possible.",
    ],
    "Search/reporting has no results": [
      "Check filters, date range, and selected source.",
      "Confirm the underlying meetings, emails, documents, or reporting fields exist.",
      "Wait for processing or sync if data was just added.",
      "Contact support if known data still does not appear.",
    ],
    "CRM sync issues": [
      "Check the CRM integration connection.",
      "Check field mapping and property permissions.",
      "Check pipeline and stage mappings.",
      "Retry or contact support after confirming the mapped CRM record still exists.",
    ],
    "Stage drift conflicts": [
      "Check whether CRM stages were renamed, deleted, reordered, or added.",
      "Open Field Mapping and review stage mappings.",
      "Resolve drift by mapping each Ergo stage to the correct CRM stage.",
      "Test with one deal before applying broader changes.",
    ],
    "Google/Microsoft/Slack reconnects": [
      "Open Integrations and identify the disconnected service.",
      "Reconnect with the account your team expects Ergo to use.",
      "Approve all required scopes.",
      "Re-test the affected workflow, such as meetings, drafts, or Slack context.",
    ],
    "Notetaker did not join": [
      "Check whether the meeting is on the connected calendar.",
      "Check whether the meeting was rescheduled or moved to another link.",
      "Confirm the host admitted the bot from the waiting room.",
      "Use Add Bot to Meeting for manual dispatch when the meeting is live.",
    ],
    "Transcript or recording missing": [
      "Open the meeting detail page and check each output separately.",
      "Confirm whether a recording exists even if transcript or notes are missing.",
      "Retry processing if the page offers that option.",
      "Contact support with the meeting link, time, and which outputs are missing.",
    ],
    "Draft send failures": [
      "Check whether email is connected and grants are valid.",
      "Open the failed draft alert or draft queue.",
      "Retry after reconnecting email or resolving the error.",
      "Report the failure if retry does not work.",
    ],
    "Permission or access denied": [
      "Confirm the user is signed into the correct workspace.",
      "Check their role and spectator status.",
      "Check whether the page requires admin, reporting, shared-link, or global meeting access.",
      "Ask an admin to update access or contact support if access looks correct.",
    ],
  };

  if (specific[title]) return specific[title];

  if (category === "Troubleshooting") {
    return [
      "Confirm the affected workspace, user, integration, and time window.",
      "Check the related setup or access page first.",
      "Retry the workflow after correcting setup, permissions, or connection state.",
      "Contact support with the exact symptom and what you already checked.",
    ];
  }

  return [
    `Open the area of Ergo where ${title.toLowerCase()} is managed.`,
    "Confirm prerequisites and access.",
    "Complete the visible setup or workflow steps.",
    "Test the workflow with one meeting, deal, draft, or user before expanding usage.",
  ];
}

function whatToExpect(row) {
  if (row.title.includes("processing")) {
    return [
      "Recording, transcript, summary, insights, and drafts can become available at different times.",
      "A meeting can have one output available while another is still processing or unavailable.",
      "If processing remains stuck, contact support with the meeting time and link.",
    ];
  }
  if (row.title.includes("draft") || row.category === "Drafts, email, and templates") {
    return [
      "Draft behavior depends on meeting source, meeting type, email connection, and workspace preferences.",
      "Review AI-generated drafts before sending unless your workspace has explicitly configured an auto-send workflow.",
      "Reconnect email if drafts stop syncing or sending.",
    ];
  }
  if (row.category.includes("Field mapping") || row.title.includes("CRM")) {
    return [
      "CRM updates depend on connection status, mapped properties, permissions, and pipeline/stage configuration.",
      "Schema or stage changes in the CRM can require remapping in Ergo.",
      "Test on a single record before rolling changes out broadly.",
    ];
  }
  if (row.category === "Meetings and notes" || row.title.includes("Notetaker")) {
    return [
      "Ergo can only process the meeting data it can access from the connected calendar or notetaker source.",
      "Waiting rooms, reschedules, external links, and source-calendar changes can affect bot attendance.",
      "Use manual dispatch when a live meeting needs the bot and automatic join did not happen.",
    ];
  }
  if (row.access.includes("Admin-only")) {
    return [
      "Changes can affect multiple users or teams.",
      "Users may need to refresh or sign in again before access changes appear.",
      "Keep access narrow when the workflow involves meeting, reporting, or customer data.",
    ];
  }
  return [
    "Ergo should reflect the update after the relevant integration, permission, or processing step completes.",
    "If the expected page or control is missing, check role and integration access.",
    "Use support when setup looks correct but the workflow still does not work.",
  ];
}

function commonIssues(row) {
  const title = row.title;
  if (title.includes("Pylon delivery")) {
    return [
      "Pylon is disconnected or connected to the wrong workspace.",
      "The affected queue, issue, or account is not visible to Ergo.",
      "A delivery retried and appeared more than once.",
      "The workflow failed after Ergo generated the payload.",
    ];
  }
  if (title.includes("Slack") || title.includes("pre-call")) {
    return [
      "Slack is disconnected or was reconnected with the wrong workspace.",
      "Ergo is not in the customer channel.",
      "Private, shared, or Enterprise Grid channel permissions block visibility.",
      "Old channel mappings are still affecting context or delivery.",
    ];
  }
  if (row.category === "Admin" || title.includes("Permission") || title.includes("access")) {
    return [
      "The user is in the wrong workspace.",
      "The user has the wrong role or spectator status.",
      "The page requires meeting, reporting, shared-link, or admin-area access.",
      "The user needs to refresh after an access change.",
    ];
  }
  if (title === "Primary admin setup for founders, RevOps, and sales leaders") {
    return [
      "CRM, field mapping, and pipeline setup are treated as optional even though downstream CRM updates depend on them.",
      "Users are invited before workspace defaults, notetaker behavior, templates, and reporting access are ready.",
      "The connected CRM or email/calendar account does not have the permissions Ergo needs.",
      "A sandbox or synthetic CRM is connected even though Ergo needs production CRM data for useful AI output.",
      "Founders, VPs, or RevOps owners expect users to self-configure choices that should be decided centrally first.",
    ];
  }
  if (title === "Secondary admin and operator setup") {
    return [
      "The secondary admin is asked to troubleshoot users without knowing which settings the primary admin owns.",
      "Team members are provisioned into the wrong team or workspace.",
      "The secondary admin selects their own email in Sync with Admin instead of the primary admin account to inherit from.",
      "The secondary admin expects CRM setup to be repeated even though primary admin configuration should already be inherited.",
      "Settings are synced to users before the source settings are approved.",
      "Users ask operators to fix CRM, reporting, or notetaker behavior that requires broader admin permission.",
    ];
  }
  if (title === "AE setup") {
    return [
      "Email/calendar is disconnected or connected to the wrong account.",
      "The AE expects drafts before the meeting qualifies, processes, or has usable notetaker/email context.",
      "The AE expects Ergo to auto-send follow-up emails instead of creating reviewable drafts.",
      "The AE expects to work primarily from the Ergo dashboard instead of inbox drafts and Slack nudges.",
      "The meeting is matched to the wrong deal or company because the CRM record or meeting title is unclear.",
      "The AE sends an AI draft before reviewing facts, recipients, links, and next steps.",
    ];
  }
  if (title === "CSM setup") {
    return [
      "Internal meetings are captured or customer meetings are skipped because calendar rules are unclear.",
      "The CSM cannot see a meeting, account, or report because access is team-specific or shared-link based.",
      "Summaries or follow-ups miss account context because documents, CRM records, or prior meetings are not linked.",
      "The team expects CS renewal, expansion, or handoff workflows to work before a CS pipeline or CS-specific properties are configured.",
      "The team expects sales-only draft or insight behavior to apply the same way to post-sale workflows.",
    ];
  }
  if (title === "Spectator and viewer setup") {
    return [
      "The viewer is given full user access when limited meeting or reporting visibility would be safer.",
      "A manager or executive expects to configure CRM or email even though their setup is usually just provisioning and dashboard walkthrough.",
      "The viewer signs into the wrong workspace or opens a link without the required access.",
      "A shared link, meeting folder, report, or dashboard was not actually shared with the viewer.",
      "Access remains available after the viewer no longer needs it.",
    ];
  }
  if (title.includes("reporting") || row.category === "Reporting") {
    return [
      "The viewer does not have reporting access.",
      "Filters or time ranges exclude the expected data.",
      "Meetings, CRM fields, or reporting fields are still syncing.",
      "A shared link or embedded dashboard does not include the expected permissions.",
    ];
  }
  if (title.includes("Search")) {
    return [
      "Filters, date ranges, or source modes are too narrow.",
      "Meetings, emails, or documents are still processing.",
      "The search phrase does not match the customer, deal, or source text.",
      "The user does not have access to the result source.",
    ];
  }
  if (title.includes("multiple notetakers") || title.includes("Duplicate drafts")) {
    return [
      "More than one notetaker source captured the same meeting.",
      "An external notetaker is connected to Ergo while Ergo Notetaker or Desktop is also active.",
      "Draft deduplication does not apply across every notetaker source.",
      "The team wants to keep an external notetaker for internal use but not for Ergo automations.",
    ];
  }
  if (title.includes("HubSpot") || title.includes("names and matches CRM")) {
    return [
      "The company or deal name differs from the meeting or customer name.",
      "The meeting is associated with a different CRM record than expected.",
      "Domain, contact, or account data is incomplete in the CRM.",
      "The meeting source does not provide the same recording or audio assets as Ergo Notetaker.",
    ];
  }
  if (title.includes("backfill")) {
    return [
      "A newly mapped field does not automatically populate historical records.",
      "Historical meeting data needs manual review or support-assisted planning.",
      "The field did not exist when older meetings were processed.",
      "The customer expects reporting history before enough mapped data exists.",
    ];
  }
  if (title.includes("Notetaker") || row.category === "Meetings and notes") {
    return [
      "The bot was not admitted from the waiting room.",
      "The meeting was rescheduled or moved to a different link.",
      "The meeting was on a calendar Ergo cannot access.",
      "A recording is available but transcript, insights, or drafts are still missing.",
    ];
  }
  if (row.category === "Integrations" || title.includes("reconnect")) {
    return [
      "The integration grant expired or was revoked.",
      "The reconnect was completed with a different account than expected.",
      "Required scopes were not approved.",
      "The connected service changed permissions or channel/calendar access.",
    ];
  }
  if (row.category.includes("Field mapping") || title.includes("CRM") || title.includes("Stage")) {
    return [
      "The CRM property does not exist or has the wrong type.",
      "The connected CRM account cannot read or update the property.",
      "Pipeline or stage mappings changed in the CRM.",
      "Ergo is looking at a different deal or company record than expected.",
    ];
  }
  if (row.category === "Drafts, email, and templates" || title.includes("draft")) {
    return [
      "Email grants expired or the mailbox was disconnected.",
      "The meeting source or meeting type did not qualify for draft generation.",
      "Another connected notetaker created duplicate context.",
      "A draft failed to sync or send and needs retry or report.",
    ];
  }
  if (row.category === "Onboarding") {
    return [
      "The person is in the wrong workspace.",
      "Their role or permission does not match the setup path.",
      "A required integration is not connected yet.",
      "A setup step is hidden until earlier setup is complete or enabled for the workspace.",
    ];
  }
  if (row.category === "Start and guidelines") {
    return [
      "The person is using the wrong workspace or team context.",
      "Their role, permission, or spectator access does not match the workflow.",
      "A connected source is missing, stale, or still syncing.",
      "AI output needs source review before it is used externally.",
    ];
  }
  return [
    "The user is in the wrong workspace.",
    "A required integration is not connected.",
    "The user does not have the required role or access.",
    "The relevant meeting, deal, draft, report, or integration is still processing or syncing.",
  ];
}

function isTroubleshootingLike(row) {
  const value = row.title.toLowerCase();
  return (
    row.category === "Troubleshooting" ||
    value.startsWith("troubleshoot") ||
    value.includes("troubleshooting") ||
    value.includes("issues") ||
    value.includes("missing") ||
    value.includes("failures") ||
    value.includes("denied") ||
    value.includes("conflicts")
  );
}

function supportGuidance(row) {
  if (row.category === "Troubleshooting" || row.title.includes("Troubleshoot")) {
    return [
      "The workflow still fails after checking setup and reconnecting required integrations.",
      "A meeting, draft, or CRM update is missing after the expected processing window.",
      "The customer-facing error message does not explain what to fix next.",
    ];
  }
  return [
    "You cannot see the page or control after an admin confirms access.",
    "A connected integration appears healthy but the workflow still does not complete.",
    "A customer-facing output is incorrect and cannot be corrected from the page.",
  ];
}

function renderList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function renderRelated(row, rowByTitle) {
  const related = relatedByTitle[row.title] ?? [];
  const links = related
    .filter((title) => rowByTitle.has(title))
    .map((title) => {
      const target = rowByTitle.get(title);
      const currentDir = categoryDirs[row.category];
      const targetDir = categoryDirs[target.category];
      const rel = currentDir === targetDir ? `./${slugify(title)}` : `../${targetDir}/${slugify(title)}`;
      return `- [${title}](${rel})`;
    });
  if (links.length === 0) {
    const dir = categoryDirs[row.category];
    const categoryLink = `- [${sectionMeta[row.category].group}](./index)`;
    if (row.category === "Troubleshooting") return `${categoryLink}\n- [Getting support](../start-here/getting-support)`;
    return `${categoryLink}\n- [Troubleshooting](../troubleshooting/index)\n- [Getting support](../start-here/getting-support)`;
  }
  return links.join("\n");
}

function pageMdx(row, rowByTitle) {
  const image = visualFor(row);
  const imageBlock = image
    ? `\n![${image.alt}](../images/${image.file})\n`
    : "";
  const isTroubleshooting = isTroubleshootingLike(row);
  const heading = stepsHeading(row);
  const articleAudience = shouldShowArticleAudience(row)
    ? `\n## Who is this for?\n\n${renderList(audienceBlock(row))}\n`
    : "";
  const before = articleBeforeStart(row);
  const beforeBlock = before.length > 0
    ? `\n## Before you start\n\n${renderList(before)}\n`
    : "";

  if (isTroubleshooting) {
    return `---
title: "${escapeYaml(row.title)}"
description: "${escapeYaml(descriptionFor(row))}"
keywords: ${JSON.stringify([row.title, row.category, "Ergo troubleshooting"])}
---

${imageBlock}
## Symptoms

Use this article when this issue is blocking setup, meetings, CRM updates, drafts, access, or reporting in Ergo.

## Most common causes

${renderList(commonIssues(row))}

## What to check

${renderList(setupSteps(row))}

## Resolution steps

1. Confirm the affected workspace, user, meeting, deal, draft, report, or integration.
2. Check the related setup article before retrying the workflow.
3. Reconnect required integrations or update access when those checks identify the cause.
4. Retry the workflow from Ergo.
5. Contact support if the issue persists after the checks above.

## When to contact support

${renderList(supportGuidance(row))}

## Related articles

${renderRelated(row, rowByTitle)}
`;
  }

  return `---
title: "${escapeYaml(row.title)}"
description: "${escapeYaml(descriptionFor(row))}"
keywords: ${JSON.stringify([row.title, row.category, "Ergo docs"])}
---

${imageBlock}
${articleAudience}${beforeBlock}

## ${heading}

${renderList(setupSteps(row))}

## Common issues

${renderList(commonIssues(row))}

## Related articles

${renderRelated(row, rowByTitle)}
`;
}

function escapeYaml(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function sectionIndexMdx(category, rows) {
  const meta = sectionMeta[category];
  const pageLinks = rows
    .map((row) => `- [${row.title}](./${slugify(row.title)})`)
    .join("\n");
  const audience = sectionAudience(category);
  const before = sectionBeforeStart(category);

  return `---
title: "${escapeYaml(meta.group)}"
description: "${escapeYaml(meta.description)}"
icon: "${meta.icon}"
---

${meta.description}

## Who this section is for

${renderList(audience)}

## Before you start

${renderList(before)}

## Articles

${pageLinks}

## Common issue path

If you are trying to fix something specific, start with the article closest to the symptom. If you are not sure where the problem lives, use [Troubleshooting](../troubleshooting/index).
`;
}

function rootIndexMdx(prefix = ".") {
  return `---
title: "Ergo Docs"
description: "Customer help center for setting up, using, and troubleshooting Ergo."
---

Welcome to Ergo's customer help center. Start with setup if you are new, jump into the product area you are using, or use troubleshooting when something is blocking you.

## Recommended first articles

- [Welcome to Ergo](${prefix}/start-here/welcome-to-ergo)
- [First-time setup checklist](${prefix}/setup/first-time-setup-checklist)
- [Connect email and calendar](${prefix}/setup/connect-email-and-calendar)
- [Notetaker setup](${prefix}/setup/notetaker-setup)
- [Field mapping setup](${prefix}/field-mapping/field-mapping-setup-required-before-crm-updates-work)
- [Troubleshooting](${prefix}/troubleshooting/index)

## How to use these docs

- Setup articles explain prerequisites and first-time configuration.
- Workflow articles explain how to use a product surface.
- Troubleshooting articles start from a symptom and walk through checks.
- Admin-area articles are written for primary admins, secondary admins with permission, and RevOps or operations owners.
`;
}

function writeFile(relativePath, contents) {
  const fullPath = path.join(repoRoot, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, contents);
}

function writeImages() {
  const images = {
    "roles-access-matrix.svg": svgDiagram("Roles and access", [
      ["Primary admin", "Owns workspace setup, CRM configuration, teams, defaults, and broad access"],
      ["Secondary admin", "Helps manage delegated team setup, users, reporting, or settings"],
      ["User", "Uses meetings, drafts, search, follow-ups, deals, and personal setup"],
      ["Spectator", "Views limited meetings, reports, or shared links"],
      ["Desktop user", "Captures meetings and notes from Ergo Desktop"],
    ]),
    "onboarding-setup-by-role-annotated.svg": svgAnnotatedScreen(
      "Setup by role",
      ["Welcome", "CRM", "Email", "Workspace", "Templates", "Notetaker", "Reporting"],
      "Onboarding",
      [
        { x: 260, y: 132, w: 640, h: 68, title: "Primary admin path", body: "CRM, field mapping, teams, defaults, reporting" },
        { x: 260, y: 220, w: 640, h: 68, title: "Secondary admin path", body: "Delegated setup, users, templates, notetaker defaults" },
        { x: 260, y: 308, w: 640, h: 68, title: "User path", body: "Email, calendar, personal preferences, drafts, test meeting" },
        { x: 260, y: 396, w: 640, h: 68, title: "Spectator path", body: "Workspace, limited visibility, meeting or reporting access" },
      ],
      [
        { x: 818, y: 164, lx: 850, ly: 94, label: "Workspace owners start here", width: 252 },
        { x: 356, y: 342, lx: 686, ly: 520, label: "Users finish personal setup", width: 250 },
        { x: 642, y: 430, lx: 790, ly: 454, label: "Spectators stay limited", width: 214 },
      ]
    ),
    "admin-dashboard-roles-annotated.svg": svgAnnotatedScreen(
      "Admin roles and access",
      ["Admin", "Teams", "Members", "Access", "Settings", "Billing"],
      "Admin Dashboard",
      [
        { x: 260, y: 128, w: 300, h: 90, title: "Primary admin", body: "Workspace owner and final setup owner" },
        { x: 590, y: 128, w: 300, h: 90, title: "Secondary admins", body: "Delegated configuration and team management" },
        { x: 260, y: 254, w: 300, h: 116, title: "Team members", body: "Users, spectators, and desktop users" },
        { x: 590, y: 254, w: 300, h: 116, title: "Access controls", body: "Meeting visibility, reporting, role changes" },
        { x: 260, y: 402, w: 630, h: 70, title: "Sync settings to team members", body: "Use after CRM, templates, or defaults are configured" },
      ],
      [
        { x: 496, y: 156, lx: 710, ly: 72, label: "Primary admin owns setup", width: 242 },
        { x: 740, y: 308, lx: 812, ly: 382, label: "Grant only needed access", width: 234 },
        { x: 532, y: 438, lx: 720, ly: 504, label: "Sync after setup is ready", width: 244 },
      ]
    ),
    "integrations-settings-annotated.svg": svgAnnotatedScreen(
      "Integrations",
      ["CRM", "Notetaking", "Email", "Slack", "Documents", "MCP"],
      "Integration Settings",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "CRM", body: "Salesforce, HubSpot, Attio, Pipedrive, Ergo CRM" },
        { x: 570, y: 128, w: 280, h: 92, title: "Email and calendar", body: "Google Workspace or Microsoft 365" },
        { x: 260, y: 254, w: 280, h: 92, title: "Notetakers", body: "Ergo, Desktop, Gong, Fireflies, Fathom, Granola" },
        { x: 570, y: 254, w: 280, h: 92, title: "Collaboration", body: "Slack, Pylon, Beeper, external agent tools" },
        { x: 260, y: 382, w: 590, h: 70, title: "Reconnect states", body: "Expired grants block dependent workflows until scopes are approved again" },
      ],
      [
        { x: 476, y: 158, lx: 742, ly: 82, label: "Connect with update permissions", width: 282 },
        { x: 716, y: 176, lx: 806, ly: 212, label: "Calendar drives meetings", width: 228 },
        { x: 524, y: 416, lx: 718, ly: 500, label: "Reconnect with the expected account", width: 306 },
      ]
    ),
    "meetings-dashboard-annotated.svg": svgAnnotatedScreen(
      "Meetings and notetaker",
      ["Dashboard", "Meetings", "Notes", "Clips", "Share", "History"],
      "Upcoming meetings",
      [
        { x: 260, y: 128, w: 630, h: 72, title: "Customer meeting", body: "Notetaker scheduled, calendar source connected" },
        { x: 260, y: 222, w: 300, h: 110, title: "Add Bot to Meeting", body: "Manual dispatch for live or external links" },
        { x: 590, y: 222, w: 300, h: 110, title: "Waiting room", body: "Host may need to admit the Ergo bot" },
        { x: 260, y: 364, w: 630, h: 84, title: "Processing outputs", body: "Recording, transcript, summary, insights, and drafts can finish separately" },
      ],
      [
        { x: 772, y: 166, lx: 792, ly: 82, label: "Check notetaker status before the call", width: 314 },
        { x: 404, y: 276, lx: 642, ly: 276, label: "Use for external links", width: 214 },
        { x: 742, y: 400, lx: 790, ly: 500, label: "Outputs may arrive at different times", width: 312 },
      ]
    ),
    "field-mapping-annotated.svg": svgAnnotatedScreen(
      "Field mapping",
      ["CRM", "Properties", "Pipelines", "Stages", "Drift", "Permissions"],
      "Field Mapping",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "CRM properties", body: "Map each Ergo field to the right CRM property" },
        { x: 570, y: 128, w: 280, h: 92, title: "Property permissions", body: "Connected CRM user must read and update fields" },
        { x: 260, y: 254, w: 280, h: 92, title: "Pipelines and stages", body: "Match Ergo stages to CRM stages" },
        { x: 570, y: 254, w: 280, h: 92, title: "Stage drift", body: "Resolve renamed, deleted, or reordered stages" },
        { x: 260, y: 382, w: 590, h: 70, title: "Test one record", body: "Verify writeback before enabling broader automation" },
      ],
      [
        { x: 432, y: 166, lx: 692, ly: 76, label: "Mapping is required before writeback", width: 312 },
        { x: 742, y: 166, lx: 806, ly: 218, label: "Check CRM permissions", width: 224 },
        { x: 742, y: 300, lx: 786, ly: 408, label: "Fix drift after CRM changes", width: 254 },
      ]
    ),
    "drafts-templates-annotated.svg": svgAnnotatedScreen(
      "Drafts and templates",
      ["Drafts", "Needs review", "Failed", "Scheduled", "Sent", "Templates"],
      "Drafts",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "Needs review", body: "AI drafts should be checked before sending" },
        { x: 570, y: 128, w: 280, h: 92, title: "Reprompt", body: "Ask for shorter, warmer, or more detailed copy" },
        { x: 260, y: 254, w: 280, h: 92, title: "Send or schedule", body: "Confirm recipients, links, and timing" },
        { x: 570, y: 254, w: 280, h: 92, title: "Failed drafts", body: "Reconnect email, retry, or report the issue" },
        { x: 260, y: 382, w: 590, h: 70, title: "Templates", body: "Set reusable follow-up structure and team tone" },
      ],
      [
        { x: 406, y: 166, lx: 656, ly: 76, label: "Review AI output before sending", width: 286 },
        { x: 700, y: 300, lx: 794, ly: 378, label: "Failures usually start with email connection", width: 340 },
        { x: 550, y: 420, lx: 742, ly: 510, label: "Templates shape future drafts", width: 262 },
      ]
    ),
    "desktop-settings-annotated.svg": svgAnnotatedScreen(
      "Ergo Desktop",
      ["Account", "Permissions", "Recording", "Transcript", "Uploads", "Updates"],
      "Desktop Settings",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "Signed in", body: "Use the same Ergo account as the browser app" },
        { x: 570, y: 128, w: 280, h: 92, title: "macOS permissions", body: "Grant microphone and any prompted permissions" },
        { x: 260, y: 254, w: 280, h: 92, title: "Recording status", body: "Check capture before and during meetings" },
        { x: 570, y: 254, w: 280, h: 92, title: "Upload health", body: "Uploads need the app open and network available" },
        { x: 260, y: 382, w: 590, h: 70, title: "Updates", body: "Re-test capture after changing permissions or updating" },
      ],
      [
        { x: 720, y: 166, lx: 802, ly: 82, label: "Permissions control capture", width: 250 },
        { x: 416, y: 300, lx: 652, ly: 304, label: "Check status during the meeting", width: 296 },
        { x: 718, y: 300, lx: 780, ly: 430, label: "Upload failures need meeting time and app version", width: 366 },
      ]
    ),
    "deals-crm-annotated.svg": svgAnnotatedScreen(
      "Deals and CRM",
      ["Deals", "Companies", "Pipeline", "Views", "Health", "Activity"],
      "Deals",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "Pipeline or view", body: "Choose the slice of deals you want to inspect" },
        { x: 570, y: 128, w: 280, h: 92, title: "Filters and sorting", body: "Narrow by owner, stage, health, or account" },
        { x: 260, y: 254, w: 280, h: 92, title: "Deal health", body: "Review signal with source activity" },
        { x: 570, y: 254, w: 280, h: 92, title: "Deal detail", body: "Meetings, emails, documents, and CRM fields" },
        { x: 260, y: 382, w: 590, h: 70, title: "Bulk actions", body: "Filter first, then review the selected records carefully" },
      ],
      [
        { x: 392, y: 166, lx: 696, ly: 80, label: "Views keep teams focused", width: 236 },
        { x: 718, y: 300, lx: 788, ly: 386, label: "Open source tabs before acting", width: 276 },
        { x: 542, y: 420, lx: 746, ly: 510, label: "Bulk actions depend on the filtered set", width: 326 },
      ]
    ),
    "knowledge-base-annotated.svg": svgAnnotatedScreen(
      "Knowledge base and documents",
      ["Knowledge", "Generated", "Status", "Deals", "Share", "Instructions"],
      "Documents",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "Upload source docs", body: "Choose user or organization scope" },
        { x: 570, y: 128, w: 280, h: 92, title: "Processing status", body: "Wait for ready before expecting AI usage" },
        { x: 260, y: 254, w: 280, h: 92, title: "Generated documents", body: "Review source context before sharing" },
        { x: 570, y: 254, w: 280, h: 92, title: "Linked deals", body: "Attach docs to the right customer context" },
        { x: 260, y: 382, w: 590, h: 70, title: "Sharing", body: "Share or revoke access when external visibility changes" },
      ],
      [
        { x: 402, y: 166, lx: 696, ly: 76, label: "Scope controls who can use the doc", width: 310 },
        { x: 710, y: 166, lx: 796, ly: 230, label: "Status matters before AI uses it", width: 286 },
        { x: 552, y: 420, lx: 728, ly: 506, label: "Review before sharing", width: 224 },
      ]
    ),
    "ai-search-automation-annotated.svg": svgAnnotatedScreen(
      "Ergo AI, search, and automation",
      ["Chat", "Sources", "Search", "Runs", "Follow-ups", "Actions"],
      "Ergo AI",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "Ask with context", body: "Name the customer, deal, meeting, or date range" },
        { x: 570, y: 128, w: 280, h: 92, title: "Sources", body: "Check meetings, emails, documents, and CRM context" },
        { x: 260, y: 254, w: 280, h: 92, title: "Search filters", body: "Widen filters when expected results are missing" },
        { x: 570, y: 254, w: 280, h: 92, title: "Scheduled runs", body: "Review first deliveries before relying on automation" },
        { x: 260, y: 382, w: 590, h: 70, title: "Follow-ups", body: "Use due, overdue, and related context views" },
      ],
      [
        { x: 724, y: 166, lx: 794, ly: 78, label: "Sources explain the answer", width: 246 },
        { x: 400, y: 300, lx: 668, ly: 304, label: "Filters are the usual missing-results cause", width: 346 },
        { x: 718, y: 300, lx: 782, ly: 420, label: "Monitor run history", width: 210 },
      ]
    ),
    "reporting-dashboard-annotated.svg": svgAnnotatedScreen(
      "Reporting",
      ["Dashboards", "Reports", "Charts", "Filters", "Share", "Cadences"],
      "Reporting",
      [
        { x: 260, y: 128, w: 280, h: 92, title: "Dashboard filters", body: "Confirm team, date range, and fields first" },
        { x: 570, y: 128, w: 280, h: 92, title: "Chart builder", body: "Choose fields, buckets, and drilldowns" },
        { x: 260, y: 254, w: 280, h: 92, title: "Custom fields", body: "Fields must be mapped and populated" },
        { x: 570, y: 254, w: 280, h: 92, title: "Share access", body: "Viewers need reporting access or a valid share link" },
        { x: 260, y: 382, w: 590, h: 70, title: "Cadences", body: "Preview and review run history after enabling email delivery" },
      ],
      [
        { x: 396, y: 166, lx: 690, ly: 78, label: "Filters explain many empty dashboards", width: 336 },
        { x: 722, y: 300, lx: 792, ly: 386, label: "Sharing still needs access", width: 244 },
        { x: 548, y: 420, lx: 748, ly: 508, label: "Preview before recurring emails", width: 284 },
      ]
    ),
    "calendar-email-connection-flow.svg": svgFlow("Email and calendar connection", [
      "Connect account",
      "Approve scopes",
      "Detect meetings",
      "Create notes and drafts",
    ]),
    "meetings-add-bot-flow.svg": svgFlow("Add Bot to Meeting", [
      "Copy meeting link",
      "Paste in Ergo",
      "Dispatch bot",
      "Admit from waiting room",
    ]),
    "meeting-processing-flow.svg": svgFlow("Meeting outputs", [
      "Recording",
      "Transcript",
      "Summary",
      "Insights",
      "Drafts",
    ]),
    "field-mapping-crm-flow.svg": svgFlow("CRM update readiness", [
      "Connect CRM",
      "Map fields",
      "Validate stages",
      "Sync updates",
    ]),
    "integration-reconnect-flow.svg": svgFlow("Reconnect integrations", [
      "Expired grant",
      "Reconnect account",
      "Approve scopes",
      "Retest workflow",
    ]),
    "hubspot-meeting-link-flow.svg": svgFlow("HubSpot meeting links", [
      "Meeting captured",
      "Activity created",
      "Ergo link added",
      "Open recording",
    ]),
    "slack-context-flow.svg": svgFlow("Slack context", [
      "Connect Slack",
      "Add channel",
      "Read context",
      "Use pre-call brief",
    ]),
    "multiple-notetakers-flow.svg": svgFlow("Multiple notetakers", [
      "Two sources",
      "Duplicate context",
      "Duplicate drafts",
      "Choose one source",
    ]),
    "crm-record-matching-flow.svg": svgFlow("CRM record matching", [
      "Meeting title",
      "Company/domain",
      "CRM records",
      "Matched deal",
    ]),
    "crm-backfill-flow.svg": svgFlow("CRM backfill options", [
      "New field",
      "Historical meetings",
      "Manual review",
      "Support planning",
    ]),
    "pylon-delivery-flow.svg": svgFlow("Pylon delivery", [
      "Connected queue",
      "Delivery attempt",
      "Duplicate or failure",
      "Escalate details",
    ]),
    "reporting-sharing-flow.svg": svgFlow("Reporting sharing", [
      "Build report",
      "Set filters",
      "Share access",
      "Review results",
    ]),
  };

  for (const [file, contents] of Object.entries(images)) {
    writeFile(`customer-docs/images/${file}`, contents);
  }
}

function svgAnnotatedScreen(title, navItems, screenTitle, cards, callouts) {
  const width = 1080;
  const height = 640;
  const nav = navItems
    .map((item, index) => {
      const y = 112 + index * 42;
      const selected = index === 0;
      return `<rect x="34" y="${y - 24}" width="164" height="32" rx="7" fill="${selected ? "#e2e8f0" : "transparent"}" />
<text x="54" y="${y - 4}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="${selected ? "700" : "500"}" fill="#0f172a">${escapeXml(item)}</text>`;
    })
    .join("\n");

  const cardEls = cards
    .map((card) => {
      const accent = card.accent ?? "#2563eb";
      return `<rect x="${card.x}" y="${card.y}" width="${card.w}" height="${card.h}" rx="10" fill="#ffffff" stroke="#cbd5e1" />
<rect x="${card.x}" y="${card.y}" width="5" height="${card.h}" rx="3" fill="${accent}" />
<text x="${card.x + 22}" y="${card.y + 30}" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700" fill="#0f172a">${escapeXml(card.title)}</text>
${svgWrappedText(card.body, card.x + 22, card.y + 56, Math.max(26, Math.floor((card.w - 44) / 8)), 13, "#475569")}`;
    })
    .join("\n");

  const calloutEls = callouts
    .map((callout, index) => {
      const labelWidth = callout.width ?? 260;
      const color = index % 2 === 0 ? "#ea580c" : "#0f766e";
      return `<circle cx="${callout.x}" cy="${callout.y}" r="18" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-width="3" />
<path d="M ${callout.x + 18} ${callout.y} L ${callout.lx} ${callout.ly}" stroke="${color}" stroke-width="2" marker-end="url(#screen-arrow)" />
<rect x="${callout.lx}" y="${callout.ly - 22}" width="${labelWidth}" height="44" rx="8" fill="#ffffff" stroke="${color}" />
${svgWrappedText(callout.label, callout.lx + 14, callout.ly - 4, Math.floor((labelWidth - 28) / 8), 12, "#0f172a", 2)}`;
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(title)}">
<defs>
<marker id="screen-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#0f172a" />
</marker>
</defs>
<rect width="${width}" height="${height}" rx="18" fill="#f8fafc" />
<rect x="20" y="20" width="1040" height="600" rx="14" fill="#ffffff" stroke="#cbd5e1" />
<rect x="20" y="20" width="210" height="600" rx="14" fill="#f1f5f9" />
<rect x="20" y="20" width="1040" height="56" rx="14" fill="#ffffff" stroke="#e2e8f0" />
<text x="44" y="55" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800" fill="#0f172a">Ergo</text>
<text x="260" y="55" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="800" fill="#0f172a">${escapeXml(screenTitle)}</text>
${nav}
${cardEls}
${calloutEls}
</svg>
`;
}

function svgWrappedText(value, x, y, maxChars, fontSize = 13, color = "#334155", maxLines = 3) {
  const words = value.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines
    .slice(0, maxLines)
    .map((line, index) => `<text x="${x}" y="${y + index * (fontSize + 5)}" font-family="Inter, Arial, sans-serif" font-size="${fontSize}" fill="${color}">${escapeXml(line)}</text>`)
    .join("\n");
}

function svgFlow(title, steps) {
  const width = 980;
  const height = 220;
  const boxWidth = 170;
  const gap = (width - 80 - steps.length * boxWidth) / (steps.length - 1);
  const boxes = steps
    .map((step, index) => {
      const x = 40 + index * (boxWidth + gap);
      const arrow =
        index < steps.length - 1
          ? `<path d="M ${x + boxWidth + 12} 118 L ${x + boxWidth + gap - 18} 118" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />`
          : "";
      return `${arrow}<rect x="${x}" y="72" width="${boxWidth}" height="72" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
<text x="${x + boxWidth / 2}" y="112" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="15" fill="#0f172a">${escapeXml(step)}</text>`;
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(title)}">
<defs>
<marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#475569" />
</marker>
</defs>
<rect width="${width}" height="${height}" rx="16" fill="#f8fafc" />
<text x="40" y="42" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#0f172a">${escapeXml(title)}</text>
${boxes}
</svg>
`;
}

function svgDiagram(title, rows) {
  const width = 980;
  const rowHeight = 52;
  const height = 92 + rows.length * rowHeight;
  const body = rows
    .map(([label, desc], index) => {
      const y = 68 + index * rowHeight;
      return `<rect x="40" y="${y}" width="880" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1" />
<text x="68" y="${y + 27}" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700" fill="#0f172a">${escapeXml(label)}</text>
<text x="250" y="${y + 27}" font-family="Inter, Arial, sans-serif" font-size="15" fill="#334155">${escapeXml(desc)}</text>`;
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(title)}">
<rect width="${width}" height="${height}" rx="16" fill="#f8fafc" />
<text x="40" y="42" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#0f172a">${escapeXml(title)}</text>
${body}
</svg>
`;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function writeDocsJson(groups) {
  const navGroups = [
    {
      group: "Home",
      icon: "home",
      pages: ["customer-docs/index"],
    },
    ...groups.map(({ category, rows }) => {
      const meta = sectionMeta[category];
      const dir = categoryDirs[category];
      return {
        group: meta.group,
        icon: meta.icon,
        root: `customer-docs/${dir}/index`,
        pages: rows.map(pagePathFor),
      };
    }),
  ];

  const config = {
    $schema: "https://mintlify.com/docs.json",
    theme: "maple",
    name: "Ergo Docs",
    description: "Customer docs for setting up, using, and troubleshooting Ergo.",
    colors: {
      primary: "#111827",
    },
    icons: {
      library: "lucide",
    },
    metadata: {
      timestamp: true,
    },
    navigation: {
      groups: navGroups,
    },
    footer: {
      socials: {},
    },
  };

  writeFile("docs.json", `${JSON.stringify(config, null, 2)}\n`);
}

function main() {
  const inventory = fs.readFileSync(inventoryPath, "utf8");
  const allRows = parseInventory(inventory);
  const contentRows = allRows;
  const rowByTitle = new Map(contentRows.map((row) => [row.title, row]));

  writeFile("index.mdx", rootIndexMdx("./customer-docs"));
  writeFile("customer-docs/index.mdx", rootIndexMdx("."));
  writeImages();

  const grouped = [];
  for (const category of Object.keys(categoryDirs)) {
    const rows = contentRows.filter((row) => row.category === category);
    if (rows.length === 0) continue;
    grouped.push({ category, rows });
    const dir = categoryDirs[category];
    writeFile(`customer-docs/${dir}/index.mdx`, sectionIndexMdx(category, rows));
    for (const row of rows) {
      writeFile(`${pagePathFor(row)}.mdx`, pageMdx(row, rowByTitle));
    }
  }

  writeDocsJson(grouped);

  console.log(`Generated ${contentRows.length} articles across ${grouped.length} sections.`);
}

main();
