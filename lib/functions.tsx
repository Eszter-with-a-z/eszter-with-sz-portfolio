import { ReactNode } from "react"

type PhraseStyle = {
  phrase: string
  className: string
}

export function renderWithTextStyling(
  text: string,
  boldPhrases: string[] = [],
  serifPhrases: string[] = []
): ReactNode[] {
  // Build a unified list of styled phrases
  const styledPhrases: PhraseStyle[] = [
    ...boldPhrases.map((phrase) => ({
      phrase,
      className: "font-semibold",
    })),
    ...serifPhrases.map((phrase) => ({
      phrase,
      className: "text-lg font-serif italic",
    })),
  ]

  let parts: ReactNode[] = [text]

  styledPhrases.forEach(({ phrase, className }) => {
    parts = parts.flatMap((part, index) => {
      if (typeof part !== "string") return part

      return part.split(phrase).flatMap((chunk, i, arr) =>
        i < arr.length - 1
          ? [
              chunk,
              <span
                key={`${phrase}-${index}-${i}`}
                className={className}
              >
                {phrase}
              </span>,
            ]
          : [chunk]
      )
    })
  })

  return parts
}
