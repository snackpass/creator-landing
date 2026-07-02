/**
 * Snackpass — creator application form -> Google Sheet
 *
 * SETUP
 * 1. Create a Google Sheet. Put this header row in row 1:
 *      timestamp | name | handle | platform | city
 * 2. Extensions -> Apps Script. Delete the default code, paste this whole file.
 * 3. Deploy -> New deployment -> Type: Web app
 *      Execute as: Me   |   Who has access: Anyone
 *      -> Deploy -> authorize -> copy the "Web app" URL.
 * 4. Send that Web app URL to Claude — it replaces SHEET_ENDPOINT in apply-dm-b.html.
 *
 * (Optional) To also ping Slack, paste an incoming-webhook URL into SLACK_WEBHOOK below.
 */

var SLACK_WEBHOOK = ''; // optional: paste a Slack incoming-webhook URL to also notify a channel

function doPost(e) {
  var p = (e && e.parameter) || {};
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([
    new Date(),
    p.name || '',
    p.handle || '',
    p.platform || '',
    p.city || ''
  ]);

  if (SLACK_WEBHOOK && SLACK_WEBHOOK.indexOf('http') === 0) {
    var text =
      ':sparkles: *New creator application*\n' +
      '*Name:* ' + (p.name || '—') + '\n' +
      '*Handle:* @' + (p.handle || '—') + ' (' + (p.platform || '—') + ')\n' +
      '*City:* ' + (p.city || '—');
    try {
      UrlFetchApp.fetch(SLACK_WEBHOOK, {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify({ text: text }),
        muteHttpExceptions: true
      });
    } catch (err) {}
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
