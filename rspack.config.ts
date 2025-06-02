require("dotenv").config();
import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import { ReactRefreshRspackPlugin } from "@rspack/plugin-react-refresh";

import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
const isDev = process.env.NODE_ENV === "development";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["last 2 versions", "> 0.2%", "not dead", "Firefox ESR"];

export default defineConfig({
  entry: {
    main: "./src/main.tsx",
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["postcss-loader"], type: "css" },
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),

    new rspack.DefinePlugin({
      "process.env.REACT_APP_API_KEY": JSON.stringify(
        process.env.REACT_APP_API_KEY,
      ),
      "process.env.REACT_APP_AUTH_DOMAIN": JSON.stringify(
        process.env.REACT_APP_AUTH_DOMAIN,
      ),
      "process.env.REACT_APP_PROJECT_ID": JSON.stringify(
        process.env.REACT_APP_PROJECT_ID,
      ),
      "process.env.REACT_APP_STORAGE_BUCKET": JSON.stringify(
        process.env.REACT_APP_STORAGE_BUCKET,
      ),
      "process.env.REACT_APP_MESSAGING_SENDER_ID": JSON.stringify(
        process.env.REACT_APP_MESSAGING_SENDER_ID,
      ),
      "process.env.REACT_APP_APP_ID": JSON.stringify(
        process.env.REACT_APP_APP_ID,
      ),
    }),
    isDev ? new ReactRefreshRspackPlugin() : null,
    TanStackRouterRspack({ target: "react", autoCodeSplitting: true }),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
  },
});
