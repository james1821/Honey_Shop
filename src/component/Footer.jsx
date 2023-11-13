import React from "react";

function Footer() {
  return (
    <footer className="bg-pink-200 py-4 text-center">
      <div className="flex flex-row justify-center gap-5 items-center">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@ms.honeyshop_"
          data-unique-id="ms.honeyshop_"
          data-embed-type="creator"
          style={{ maxWidth: "780px", minWidth: "288px" }}
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@ms.honeyshop_?refer=creator_embed"
            >
              @ms.honeyshop_
            </a>
          </section>
        </blockquote>
      </div>
    </footer>
  );
}

export default Footer;
