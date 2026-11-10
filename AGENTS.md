<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The hotel is a single-page experience with section anchors because its supplied content describes one continuous booking journey.
- Booking requests use prefilled WhatsApp links instead of local persistence because the hotel handles confirmation directly by message.
- Hotel image files are intentionally source-controlled in public/assets so deployments outside Lovable can serve them without Lovable's asset proxy.
- Location facts live in a browser-safe data module so the distance can be tested independently of presentation.
- Keep room-selection card images stable; use supporting property and restaurant photos in separate sections so room imagery stays recognizable.
