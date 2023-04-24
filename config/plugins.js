module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_At3GWj1LW2lfYdfs1lnaCICPhmTy/VvNf14JVad",
      apiToken: "v8VBQEaxcPAcp8SvwjZjEnzS",
      appFilter: "chat-strapi",
      teamFilter: "chat-strapi",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
