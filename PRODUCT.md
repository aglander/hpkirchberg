# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Concert-goers and fans of Hans-Peter Kirchberg, a conductor, pianist and musical director based in Schöneiche bei Berlin. They come to find out who he is, see his photographs and recordings, and check where he performs next. Ensemble managers and collaborators may also visit, but they are not the primary audience.

## Product Purpose
The personal website of Hans-Peter Kirchberg. Its main job is a personal archive: his life and career (Leipzig, Thomasschule, Dresden studies, decades of conducting), a large body of historical photographs, and his discography. Success is a visitor leaving with a sense of the person and his work and knowing how to find a concert or a recording.

## Positioning
A first-person site in his own voice, with a handwritten signature and real archival material spanning roughly 60 years (a 1962 childhood piano photo through current work). No agency or management layer sits between him and the visitor.

## Operating Context
- Routes: Startseite, Termine, Biographie, Bilder, Musik, Links, Kontakt, Impressum, Datenschutz.
- Termine reads `public/calendar.json`, generated from a calendar feed by `scripts/generate-calendar-json.mjs` and committed periodically ("Update calendar JSON" commits). The list can be empty.
- Musik is a discography of albums with cover, year, composer, performers and ordering info.
- Built with Vite, React, Tailwind and shadcn/ui, originally scaffolded in Lovable.

## Capabilities and Constraints
- German only; no English version planned.
- Formal "Sie" address, first person ("meine persönliche Webseite"), kept as is.
- Legal pages (Impressum, Datenschutz) and the footer credit "Website von vanglan.com" are required content.
- Contact is by e-mail and telephone, listed on Kontakt and in the Impressum. There is no contact form or booking flow.
- Open decision: whether the site should ever carry audio samples or booking information; neither exists today.

## Brand Commitments
- His name, the handwritten signature (`public/assets/general/signatur.gif`) and the formal, courteous voice.
- Only his own real photographs; no stock imagery.

## Evidence on Hand
- Archival and portrait photographs in `public/assets/pictures`.
- Album covers `public/assets/albums/01.jpg` onward, with discography data.
- Full written biography on the Biographie page.
- Absent, and not to be fabricated: press quotes, reviews, ratings, testimonials, audio or video samples, repertoire lists, booking terms.

## Product Principles
1. The person and his archive come first; the interface steps back.
2. Only real material: no invented praise, stock photos or placeholder claims.
3. Speak in his voice: formal, warm, German.
4. A visitor should always know what to do next, even when the calendar is empty.
5. Every page must work for older and mobile visitors alike.

## Accessibility & Inclusion
No specific standard was stated. The audience skews toward older concert-goers, so legible text sizes, strong contrast and keyboard operability matter. Use WCAG AA as the working bar.
