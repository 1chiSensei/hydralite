import React from "react";
import Meta from "partials/Meta";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import Layout from "~/hoc/Layout/Layout";
import Signup from "~/components/Signup/SignupPage"
const index = () => {
  const { theme } = useThemeContext();

  return (
    <Layout activeTab="Home">
      <Signup />

      <Meta
        title="Hydralite - Home"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
    </Layout>
  );
};

export default index;
