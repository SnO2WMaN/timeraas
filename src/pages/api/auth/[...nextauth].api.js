import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  debug: process.env.NODE_ENV === 'development',
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id_str,
          alias: profile.screen_name,
          displayName: profile.name,
          image: profile.profile_image_url_https.replace(
            /_normal\.(jpg|png|gif)$/,
            '.$1',
          ),
        };
      },
    }),
  ],
});
