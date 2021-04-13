import React, { useEffect } from "react";

import "./index.less";

// const LINKS = [
//   { title: "博客", link: "/blog" },
//   { title: "作品", link: "/gallery" },
//   { title: "摄影", link: "/gallery11" },
//   { title: "源码", link: "https://github.com/snokier/site" },
//   { title: "关于", link: "/about" },
// ];

const OtherShow = () => {
  useEffect(() => {
    const gitalk = new (window as any).Gitalk({
      clientID: "804e292e507bd1aed363",
      clientSecret: "cab3e3f17bd07094c51f28bf97ffbe62c072143f",
      repo: "heynext.github.io",
      owner: "heynext",
      admin: ["heynext"],
      number: 4,
    });

    gitalk.render("gitalk-container");
  }, []);

  return (
    <>
      {/* <div id="about" className="container show other-show">
        <h3 className="show-title serif">
          <p>想了解更多</p>
          <p>或许可以在这里找到</p>
        </h3>

        <div className="other-show-content serif">
          <div style={{ flex: 2 }} className="other-show-col">
            <h3 className="other-show-col-title">关于</h3>

            <div></div>
          </div>

          <div style={{ flex: 3, flexShrink: 0 }} className="other-show-col">
            <h3 className="other-show-col-title">链接</h3>

            <div className="other-show-col-main">
              <ul>
                {LINKS.map((item) => (
                  <li key={item.link}>
                    <p>
                      <a title={item.title} href={item.link} target="__blank">
                        {item.title}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ flex: 4, flexShrink: 0 }} className="other-show-col">
            <h3 className="other-show-col-title">二维码</h3>

            <div className="other-show-col-main">
              <img src="qrcode" alt="二维码" />
            </div>
          </div>
        </div>
      </div> */}

      <div id="say-hi" className="container container-R other-show-comment">
        <h3 className="other-show-comment-title serif">
          <p>给我留言</p>
        </h3>

        <div id="gitalk-container" />
      </div>
    </>
  );
};

export default OtherShow;
