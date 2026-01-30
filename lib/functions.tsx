import { ReactNode } from "react"

type TextSize = "sm" | "md" | "lg" | "xl" | "2xl" | "default"

const sizeClassMap: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  default: "text-default"
}


export interface InlineTextStyle {
  phrase: string

  bold?: boolean
  serif?: boolean

  size?: TextSize

  colorClass?: string
}

/*
{renderWithTextStyling(
  item.text string,
  item.styles: 
      [
        {phrase: `xy`, serif:true }, 
        {phrase}
      ]
)
styles: {
        1:[
          {phrase:`xy`, serif: true, bold:true, size:"xl"},
          {phrase:`xy`, serif: true, bold:true, size:"xl"},
          {phrase:`xy`, serif: true, bold:true, size:"xl"},
        ],
*/
export function renderWithTextStyling(
  text: string | undefined,
  styles: InlineTextStyle[] = []
): ReactNode[] {
   if (!text) return []
  let parts: ReactNode[] = [text]
  styles.forEach((style, styleIndex) => {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return part
      
      return part.split(style.phrase).flatMap((chunk, i, arr) =>
        i < arr.length - 1
          ? [
              chunk,
              <span
                key={`${style.phrase}-${styleIndex}-${i}`}
                className={[
                  style.bold && "font-semibold",
                  style.serif && "font-serif italic",
                  style.size && sizeClassMap[style.size],
                  style.colorClass,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {style.phrase}
              </span>,
            ]
          : [chunk]
      )
    })
  })

  return parts
}
