import React from "react";

import {
  StyledHomeMyAdvantage,
} from "./styles";

const index = () => {
  return (
    <StyledHomeMyAdvantage>
      <h2>Getting Started</h2>
      <p>
        Install core package, then install corresponding package for your framework and you are ready to go!
      </p>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@magicalui/react</td>
            <td>-</td>
          </tr>
          <tr>
            <td>@magicalui/redux</td>
            <td>-</td>
          </tr>
          <tr>
            <td>@magicalui/vue</td>
            <td>-</td>
          </tr>
          <tr>
            <td>@magicalui/vuex</td>
            <td>-</td>
          </tr>
          <tr>
            <td>@magicalui/recoil</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </StyledHomeMyAdvantage>
  );
};

export default index;
