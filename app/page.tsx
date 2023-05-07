import { getCookie, getHeader } from "./actions";
import { CookieGetter } from "./cookie-getter";
import { CookieGetterActionPassedDown } from "./cookie-getter-actions-passed-down";

export default function Home() {
  return (
    <main>
      <CookieGetter />
      <CookieGetterActionPassedDown
        getCookieAction={getCookie}
        getHeaderAction={getHeader}
      />
    </main>
  );
}
