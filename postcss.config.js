module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
    [
      "cssnano",
      process.env.NODE_ENV === "production"
        ? {
            preset: ["advanced", { discardComments: { removeAll: true } }],
          }
        : false,
    ],
    ["postcss-discard-comments", process.env.NODE_ENV === "production" ? { removeAll: true } : false],
  ],
};
