import { AuthProviderType } from "~/types/AuthProvider.type";

export default function fetchOauthClientInfo(provider: AuthProviderType) {
  let info: {
    clientId: string;
    clientSecret: string;
    cbUrl?: string;
  };
  switch (provider) {
    case "github":
      info = {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      };
      break;
    case "discord":
      info = {
        clientId: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      };
      break;
    case "google":
      info = {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      };
      break;
    case "twitter":
      info = {
        clientId: process.env.TWITTER_CLIENT_ID!,
        clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      };
      break;
  }

  info.cbUrl = `http://localhost:3000/auth/providers/${provider}`;

  return info;
}
