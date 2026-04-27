import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="umami"
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="2369ecba-3a91-4bd8-8d51-ee6d733ffd89"
    />,
  ])
}
