const languageCountryFlags = {
    en: 'us',
  it: 'it',
  fr: 'fr',
  es: 'es',
  de: 'de',
  ja: 'jp',
  ru: 'ru'
};

const FlagsConverter = ({languageFlag}) => {
    const countryCode = languageCountryFlags[languageFlag];
    const flagUrl = countryCode ? `https://flagcdn.com/w40/${countryCode}.png` : null;
    return (
          <>
      {flagUrl ? (
        <img
          src={flagUrl}
          alt={languageFlag}
          style={{ width: '20px', verticalAlign: 'middle', marginRight: '5px' }}
        />
      ) : (
        '🏳️ '
      )}
      ({languageFlag})
    </>
    )
}


export default FlagsConverter;