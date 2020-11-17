# Newscafe
<a href='https://play.google.com/store/apps/details?id=com.Newscafe&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width='150'/></a><br>
Newscafe helps you Move Closer To Your World.<br><br>

## Install dependencies
```bash
npm install
```

## Initial Config
Replace `NEWS_API_KEY` with your own API key in the following files -
- `CategoriesResult.js` 
- `SearchResults.js`
- `src/news.js`

## Build
The app can be built in 2 ways -
- `cd android && ./gradlew assembleRelease`
- `react-native bundle --platform android`

The `release` APK can be found in `/android/app/build/outputs/apk/release`.