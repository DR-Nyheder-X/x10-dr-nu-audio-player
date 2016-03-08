alias App.{Repo, Episode}

colors = [
  "purple",
  "red",
  "aqua",
  "green",
  "blue",
  "pink",
  "yellow",
  "teal",
  "orange",
  "black"
]

Repo.insert!(%Episode{
  headline: "Hvorfor er Eva Kjer Hansen stadig minister?",
  description: "Efter et møde med partilederne fra blå-blok, fortsætter både regeringen og Eva Kjer Hansen som miljø- og landbrugsminister. Til trods for flere eksperter dømte Eva Kjer Hansen ude.",
  duration: "02:10",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Eva%20Kjer%20Hansen.mp3",
  color: Enum.at(colors, 0)
})

Repo.insert!(%Episode{
  headline: "Hvordan vil Rio blive klar til OL?",
  description: "En metrolinje der stadig ikke er bygget færdig truer med at ødelægge Rios OL-drømme.",
  duration: "02:20",
  authors: "Ida Lind",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Rio.mp3",
  color: Enum.at(colors, 2)
})

Repo.insert!(%Episode{
  headline: "Hvorfor har Danmark fået sin første restaurant med tre Michelin-stjerner?",
  description: "Michelin Nordic Guide 2016 blev i dag offentliggjort, med en liste over hvilke restauranter i bla Danmark, der havde gjort sig fortjent til Michelin-stjerne. Og for første gang er en dansk restaurant blevet tildelt 3 stjerner.",
  duration: "01:35",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Michelin.mp3",
  color: Enum.at(colors, 3)
})

Repo.insert!(%Episode{
  headline: "Hvem bliver republikanernes præsidentkandidat? ",
  description: "I går afholdte republikanerne primærvalg i Nevada. Kandidaten, der havde bedst odds for at vinde var Rubio. Men sådan skulle det ikke gå.  ",
  duration: "01:50",
  authors: "Jennifer Krames og Anna Sofie Vad",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Prim%C3%A6rvalg.mp3",
  color: Enum.at(colors, 4)
})

Repo.insert!(%Episode{
  headline: "Er du typen, der får dårlig samvittighed over for miljøet, når du taget et langt bad eller lader vandet løbe, mens du børster dine tænder?",
  description: "For hvis du gør det, kan det være, du også skal begynde at se på nogle af dine andre vaner.  Forskere fra det norske universitet NTNU har nemlig i en ny rapport valgt at vende hele forurenings-skylden lidt på hovedet.",
  duration: "02:20",
  authors: "Anna Sofie ",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Forurening.mp3",
  color: Enum.at(colors, 5)
})

Repo.insert!(%Episode{
  headline: "Hvorfor skal Melodi Gran Prix's point uddelere coaches?",
  description: "Man er træt af lange taler, når der skal uddeles point til det Internationale Melodi Gran Prix, derfor har de svenske arrangører ansat coaches, så pointuddelerne kan gør det ordentligt og skarpt.",
  duration: "02:20",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Eurovision.mp3",
  color: Enum.at(colors, 6)
})

Repo.insert!(%Episode{
  headline: "Hvorfor skal racisme være strafbart?",
  description: "Den omdiskuterede racismeparagraf var endnu en gang på spil i dag, da Spyttemanden blev tiltalt for overtrædelse.",
  duration: "01:45",
  authors: "Niklas Jakobsen",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Racisme.mp3",
  color: Enum.at(colors, 7)
})

Repo.insert!(%Episode{
  headline: "Hvad er grunden til at hvalen i Blokhus er strandet?",
  description: "Biologer er begyndt at skære den hval op som er strandet i Blokhus, for at afgøre, hvorfor den er strandet.",
  duration: "1:44",
  authors: "Ida Lind",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Hval.mp3",
  color: Enum.at(colors, 8)
})

Repo.insert!(%Episode{
  headline: "Hvorfor skal du ikke logge på andres wi-fi?",
  description: "At andre kan hacke dig, hvis du logger på ukendt wi-fi, er måske ikke ukendt. Men efter en undersøgelse til en mobilmesse i Barcelona, så har man fundet ud af, at vi alligevel logger på andres wi-fi.",
  duration: "2:36",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/IT-Sikkerhed.mp3",
  color: Enum.at(colors, 9)
})

Repo.insert!(%Episode{
  headline: "Hvad ville du sige til, at betale for dit næste køb på nettet med en selfie?",
  description: "Mastercard har lige meldt ud, at de nu vil bruge selfies som et alternativ til passwords, når deres kunder skal bekræfte deres identitet på nettet.",
  duration: "1:21",
  authors: "Anna Sofie ",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Mastercard%20selfie.mp3",
  color: Enum.at(colors, 0)
})

Repo.insert!(%Episode{
  headline: "Hvordan kommer vi til at se i fremtiden? ",
  description: "Halvdelen af jordens befolkning kommer til at være nærsynet i 2050 i følge en ny rapport. Men der er råd at hente, hvis man ikke vil ende sådan.",
  duration: "02:30",
  authors: "Jennifer Krames",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/N%C3%A6rsynet.mp3",
  color: Enum.at(colors, 1)
})

Repo.insert!(%Episode{
  headline: "Hvordan er Popcorn Time genopstået?",
  description: "Sidste år blev den ulovlige streaming-tjeneste Popcorn Time lukket efter et sagsanlæg fra den amerikanske filmindustri. Men nu er den tilbage.  ",
  duration: "1:57",
  authors: "Ida Lind",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Pop-Corn%20Time.mp3",
  color: Enum.at(colors, 2)
})

Repo.insert!(%Episode{
  headline: "Hvilken betydning kan emojis have?",
  description: "Vi sender flere emojis end nogensinde før. Måske tænker du ikke over hvilke signaler de rummer. Men det bør du måske. ",
  duration: "01:48",
  authors: "Jennifer Krames",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Emoji.mp3",
  color: Enum.at(colors, 3)
})

Repo.insert!(%Episode{
  headline: "Hvordan gik Oscar-showet",
  description: "Hvis du ligesom de fleste andre valgte at sove i nat, og dermed ikke fik set Oscar-showet, så giver vi dig det overblik du har brug for",
  duration: "03:15",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Oscar.mp3",
  color: Enum.at(colors, 4)
})

Repo.insert!(%Episode{
  headline: "Skal det koste mere at dø end at leve?",
  description: "I Kina er der akut behov for flere gravpladser, og derfor er priserne på gravsteder steget ekstremt.",
  duration: "02:55",
  authors: "Niklas Jakobsen",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Kina%20-%20Gravsteder.mp3",
  color: Enum.at(colors, 5)
})

Repo.insert!(%Episode{
  headline: "Hvordan kan Virtual Reality afhjælpe din fobi?",
  description: "Du skal se din frygt i øjnene, hvis du vil komme over den. Men det kan være lettere sagt end gjort, hvis man lider af en fobi.",
  duration: "02:05",
  authors: "Ida Lind",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Virtual%20fobi.mp3",
  color: Enum.at(colors, 6)
})

Repo.insert!(%Episode{
  headline: "Hvorfor er Lars Løkke Rasmussen så snedig?",
  description: "Statsministeren var tvunget til at lave en ministerrokade, efter Eva Kjer Hansen gik af. Men lavede Lars Løkke Rasmussen i virkeligheden mere end en ministerrokade?",
  duration: "02:37",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Snedig%20Lars%20L%C3%B8kke.mp3",
  color: Enum.at(colors, 7)
})

Repo.insert!(%Episode{
  headline: "HOT Vinter",
  description: "Det har været en meget varm vinter, selvom det måske har føltes koldt på det sidste. Vi fortæller dig, hvordan det har været en varm vinter",
  duration: "02:07",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/HOT%20Vinter.mp3",
  color: Enum.at(colors, 8)
})

Repo.insert!(%Episode{
  headline: "Seksualitet som en sygdom i Danmark",
  description: "Transkønnethed er stadig en psykisk sygdom i Danmark. Vi kigger lidt nærmere på behandlingen.",
  duration: "03:04",
  authors: "Oliver Breum",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Transseksuel.mp3",
  color: Enum.at(colors, 9)
})

Repo.insert!(%Episode{
  headline: "Hvad sker der hvis Apple hacker deres egne telefoner?",
  description: "FBI har ønsket Apples hjælp til at hacke deres egne telefoner. Det har Apple afvist. Nu er der faldet foreløbig dom. ",
  duration: "02:50",
  authors: "Jennifer Krames",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Apple%20Sikkerhed.mp3",
  color: Enum.at(colors, 0)
})

Repo.insert!(%Episode{
  headline: "Hvorfor går det så godt for LEGO?",
  description: "For andet år i træk leverer LEGO et rekordstort overskud, men hvordan kan den jyske virksomhed blive ved?",
  duration: "01:47",
  authors: "Ida Lind",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/LEGO.mp3",
  color: Enum.at(colors, 1)
})

Repo.insert!(%Episode{
  headline: "Hvad skal der ske med de tomme bygge grunde?",
  description: "Jagtvej 69 har nu stået tom i ni år. Socialdemokraterne i københanvsborgerrepræsentation vil indføre byggepligt på kommunens bygge grunde for undgå dette i fremtiden.",
  duration: "02:03",
  authors: "Jennifer Krames",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/Jagtvej%2069.mp3",
  color: Enum.at(colors, 2)
})

Repo.insert!(%Episode{
  headline: "Hvorfor er Åge Hareide den rette landstræner?",
  description: "Åge Hareide har i dag første arbejdsdag som dansk landstræner. Han mener selv, at han har opskriften på underholdende fodbold og fyldte tribuner.",
  duration: "02:38",
  authors: "Niklas Jakobsen",
  audio: "http://brnbw-drex.s3.amazonaws.com/seed/%C3%85ge%20Hareide.mp3",
  color: Enum.at(colors, 3)
})


