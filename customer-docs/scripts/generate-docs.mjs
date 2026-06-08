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
  "First-time setup checklist": ["Setup by role", "Connect email and calendar", "Connect your CRM", "Notetaker setup"],
  "Setup by role": ["First-time setup checklist", "Roles and permissions", "Connect your CRM"],
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
  "Ergo Notetaker": ["Notetaker setup", "Notetaker did not join", "Add Bot to Meeting for external links"],
  "Schedule or cancel the notetaker": ["Ergo Notetaker", "Add Bot to Meeting for external links", "What happens when a meeting is rescheduled"],
  "Notetaker waiting-room admission guide": ["Notetaker did not join", "Schedule or cancel the notetaker", "Add Bot to Meeting for external links"],
  "What happens when a meeting is rescheduled": ["Add Bot to Meeting for external links", "Notetaker did not join", "Meeting availability and visibility"],
  "Add Bot to Meeting for external links": ["Schedule or cancel the notetaker", "Notetaker waiting-room admission guide", "Notetaker did not join"],
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
  "Notetaker did not join": ["Notetaker waiting-room admission guide", "Add Bot to Meeting for external links", "What happens when a meeting is rescheduled"],
  "Transcript or recording missing": ["Meeting processing time and status states", "Delete/retry processing", "Getting support"],
  "Draft send failures": ["Failed drafts retry/report", "Expired grants and reconnecting", "Turn post-call drafts on or off"],
  "Permission or access denied": ["Roles and permissions", "Spectator access", "Grant meeting/reporting access"],
};

const imageByTitle = {
  "Roles and permissions": {
    file: "roles-access-matrix.svg",
    alt: "Diagram showing User, Admin, Super Admin, Spectator, and Desktop access levels.",
  },
  "Connect email and calendar": {
    file: "calendar-email-connection-flow.svg",
    alt: "Flow diagram showing email and calendar connection before meeting capture and draft workflows.",
  },
  "Calendar scopes and meeting auto-join": {
    file: "calendar-email-connection-flow.svg",
    alt: "Flow diagram showing calendar scopes feeding meeting detection and auto-join behavior.",
  },
  "Add Bot to Meeting for external links": {
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
    file: "field-mapping-crm-flow.svg",
    alt: "Flow diagram showing CRM connection, field mapping, permissions, and CRM updates.",
  },
  "Field Mapping overview": {
    file: "field-mapping-crm-flow.svg",
    alt: "Flow diagram showing how field mapping connects Ergo outputs to CRM properties.",
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
  const lowerTitle = customerSentence(row.title);
  if (isTroubleshootingLike(row)) return `Diagnose and resolve ${lowerTitle} in Ergo.`;
  const base = {
    "Start and guidelines": `Learn ${lowerTitle} in Ergo and where it fits in the customer workflow.`,
    Onboarding: `Set up ${lowerTitle} during Ergo onboarding.`,
    Integrations: `Connect, verify, and maintain the ${row.title} integration in Ergo.`,
    "Meetings and notes": `Use Ergo for ${lowerTitle} and understand what to expect.`,
    Desktop: `Use Ergo Desktop for ${lowerTitle}.`,
    "Deals and CRM workspace": `Learn ${lowerTitle} in the Deals and CRM workspace.`,
    "Field mapping and CRM configuration": `Configure ${lowerTitle} so Ergo can update CRM data reliably.`,
    "Drafts, email, and templates": `Manage ${lowerTitle} in Ergo.`,
    "Knowledge base and generated docs": `Manage ${lowerTitle} in Ergo's document workspace.`,
    "Ergo AI, search, and automation": `Use ${lowerTitle} across Ergo AI, search, and automation workflows.`,
    Reporting: `Use ${lowerTitle} in Ergo reporting.`,
    Admin: `Admin guide for ${lowerTitle} in Ergo.`,
    Troubleshooting: `Diagnose and resolve ${lowerTitle} in Ergo.`,
  };
  return base[row.category] ?? `Learn ${lowerTitle} in Ergo.`;
}

function contextLine(row) {
  const parts = [`Audience: ${row.audience}`, `Access: ${row.access}`];
  if (row.requiredIntegration !== "None") parts.push(`Requires: ${friendlyRequirement(row.requiredIntegration)}`);
  return parts.join(" · ");
}

function beforeStart(row) {
  if (row.requiredIntegration !== "None") {
    const requirement = friendlyRequirement(row.requiredIntegration);
    const connectorText =
      requirement.includes(", ") || requirement.includes(" or ")
        ? `Confirm the relevant source is connected or available: ${requirement}.`
        : `Confirm the required source is connected or available: ${requirement}.`;
    return [
      connectorText,
      "Make sure you are signed in to the correct Ergo workspace.",
      "If you do not see the page or setting, ask an admin to check your role and access.",
    ];
  }
  if (row.access.includes("Admin-only")) {
    return [
      "Sign in with an Admin or Super Admin account.",
      "Confirm you are working in the intended organization or team.",
      "Review the change with the affected users before updating access or defaults.",
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
    "If a step is missing, ask an admin to confirm your access.",
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
      "Ask your admin which CRM, collaboration, and notetaker sources your workspace uses.",
      "Use the left navigation to move between meetings, drafts, reporting, integrations, and admin areas.",
    ],
    "Roles and permissions": [
      "Identify the person as a User, Admin, Super Admin, Spectator, or Desktop user.",
      "Check whether the workflow needs admin-only access, reporting access, shared-link access, or desktop access.",
      "Update the role from Admin when the person needs broader permissions.",
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
      "Connect your email and calendar.",
      "Connect your CRM if your role owns CRM setup.",
      "Configure workspace settings, templates, collaboration tools, and notetaker behavior.",
      "Complete CRM properties, pipeline stages, pricing, advanced settings, and reporting defaults when they apply.",
      "Run one test meeting or workflow before rolling Ergo out to the team.",
    ],
    "Setup by role": [
      "Users should connect email/calendar, review workspace setup, templates, collaboration, and notetaker settings.",
      "Admins should also connect CRM, configure company details, properties, stages, pricing, and reporting defaults.",
      "Spectators should complete user sync, workspace, and notetaker-related setup when prompted.",
      "Super Admins should verify team hierarchy and cross-team access before inviting the broader org.",
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
    "Add Bot to Meeting for external links": [
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
      "Confirm you have Super Admin access.",
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
  if (title.includes("reporting") || title.includes("dashboard") || row.category === "Reporting") {
    return [
      "The viewer does not have reporting access.",
      "Filters or time ranges exclude the expected data.",
      "Underlying meetings, CRM fields, or reports have not synced yet.",
      "A shared link or embedded dashboard does not include the expected permissions.",
    ];
  }
  if (title.includes("Search")) {
    return [
      "Filters, date ranges, or source modes are too narrow.",
      "The underlying meetings, emails, or documents have not processed yet.",
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
  if (row.category === "Admin" || title.includes("Permission") || title.includes("access")) {
    return [
      "The user is in the wrong workspace.",
      "The user has the wrong role or spectator status.",
      "The page requires reporting, admin, shared-link, or global meeting access.",
      "The user needs to refresh after an access change.",
    ];
  }
  return [
    "The user is in the wrong workspace.",
    "A required integration is not connected.",
    "The user does not have the required role or access.",
    "The underlying meeting, deal, draft, or report is still processing.",
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
  const image = imageByTitle[row.title];
  const imageBlock = image
    ? `\n![${image.alt}](../images/${image.file})\n`
    : "";
  const isTroubleshooting = isTroubleshootingLike(row);

  if (isTroubleshooting) {
    return `---
title: "${escapeYaml(row.title)}"
description: "${escapeYaml(descriptionFor(row))}"
keywords: ${JSON.stringify([row.title, row.category, "Ergo troubleshooting"])}
---

# ${row.title}

${contextLine(row)}
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

# ${row.title}

${contextLine(row)}
${imageBlock}
## Who can use this

${row.audience}. If you do not see this workflow in Ergo, ask an admin to confirm your role, team, and access.

## Before you start

${renderList(beforeStart(row))}

## Steps

${renderList(setupSteps(row))}

## What to expect

${renderList(whatToExpect(row))}

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
  const dir = categoryDirs[category];
  const pageLinks = rows
    .map((row) => `- [${row.title}](./${slugify(row.title)})`)
    .join("\n");

  return `---
title: "${escapeYaml(meta.group)}"
description: "${escapeYaml(meta.description)}"
icon: "${meta.icon}"
---

# ${meta.group}

${meta.description}

## Start here

${pageLinks}

## Common issue path

If you are trying to fix something specific, start with the article closest to the symptom. If you are not sure where the problem lives, use [Troubleshooting](../troubleshooting/index).
`;
}

function rootIndexMdx() {
  return `---
title: "Ergo Docs"
description: "Customer help center for setting up, using, and troubleshooting Ergo."
---

# Ergo Docs

Welcome to Ergo's customer help center. Start with setup if you are new, jump into the product area you are using, or use troubleshooting when something is blocking you.

## Recommended first articles

- [Welcome to Ergo](./start-here/welcome-to-ergo)
- [First-time setup checklist](./setup/first-time-setup-checklist)
- [Connect email and calendar](./setup/connect-email-and-calendar)
- [Notetaker setup](./setup/notetaker-setup)
- [Field mapping setup](./field-mapping/field-mapping-setup-required-before-crm-updates-work)
- [Troubleshooting](./troubleshooting/index)

## How to use these docs

- Setup articles explain prerequisites and first-time configuration.
- Workflow articles explain how to use a product surface.
- Troubleshooting articles start from a symptom and walk through checks.
- Admin articles are labeled for Admin or Super Admin users.
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
      ["User", "Core workspace, meetings, drafts"],
      ["Admin", "Team setup, members, integrations"],
      ["Super Admin", "Org-wide settings and access"],
      ["Spectator", "Limited viewing workflows"],
      ["Desktop", "Desktop app capture and settings"],
    ]),
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

  writeFile("customer-docs/index.mdx", rootIndexMdx());
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
