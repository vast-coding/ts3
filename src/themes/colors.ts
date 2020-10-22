export const primary: TColors = [
  'hsl(205, 35%, 90%)',
  'hsl(210, 38%, 70%)',
  'hsl(215, 41%, 65%)',
  'hsl(220, 44%, 60%)',
  'hsl(225, 47%, 55%)',
  'hsl(230, 50%, 50%)',
  'hsl(235, 47%, 45%)',
  'hsl(240, 44%, 40%)',
  'hsl(245, 41%, 35%)',
  'hsl(250, 38%, 30%)',
]

export const secondary: TColors = [
  'hsl(235, 25%, 90%)',
  'hsl(240, 30%, 82%)',
  'hsl(245, 35%, 74%)',
  'hsl(250, 40%, 66%)',
  'hsl(255, 45%, 58%)',
  'hsl(260, 50%, 50%)',
  'hsl(265, 45%, 42%)',
  'hsl(270, 40%, 34%)',
  'hsl(275, 35%, 26%)',
  'hsl(280, 30%, 18%)',
]

export const greys: TColors = [
  'hsl(220, 10%, 95%)',
  'hsl(222, 11%, 82%)',
  'hsl(224, 12%, 74%)',
  'hsl(226, 13%, 66%)',
  'hsl(228, 14%, 58%)',
  'hsl(230, 15%, 50%)',
  'hsl(232, 14%, 42%)',
  'hsl(234, 13%, 34%)',
  'hsl(236, 12%, 26%)',
  'hsl(238, 11%, 18%)',
]

export const primaryDark: TColors = [
  'hsl(205, 25%, 80%)',
  'hsl(210, 28%, 60%)',
  'hsl(215, 31%, 55%)',
  'hsl(220, 34%, 50%)',
  'hsl(225, 37%, 45%)',
  'hsl(230, 40%, 40%)',
  'hsl(235, 37%, 35%)',
  'hsl(240, 34%, 30%)',
  'hsl(245, 31%, 25%)',
  'hsl(250, 28%, 20%)',
]

export const primaryDarkReversed: TColors = [...primaryDark].reverse()

export const secondaryDark: TColors = [
  'hsl(235, 15%, 80%)',
  'hsl(240, 20%, 72%)',
  'hsl(245, 25%, 64%)',
  'hsl(250, 30%, 56%)',
  'hsl(255, 35%, 48%)',
  'hsl(260, 40%, 40%)',
  'hsl(265, 35%, 32%)',
  'hsl(270, 30%, 24%)',
  'hsl(275, 25%, 16%)',
  'hsl(280, 20%, 8%)',
]

export const secondaryDarkReversed: TColors = [...secondaryDark].reverse()

export const greysDark: TColors = [
  'hsl(238, 11%, 8%)',
  'hsl(236, 12%, 16%)',
  'hsl(234, 13%, 24%)',
  'hsl(232, 14%, 32%)',
  'hsl(230, 15%, 40%)',
  'hsl(228, 14%, 48%)',
  'hsl(226, 13%, 56%)',
  'hsl(224, 12%, 64%)',
  'hsl(222, 11%, 72%)',
  'hsl(120, 10%, 90%)',
]

export const greysDarkReversed: TColors = [...greysDark].reverse()

type TColors = string[]

export const colors = {
  primary,
  primaryDark,
  primaryDarkReversed,
  secondary,
  secondaryDark,
  secondaryDarkReversed,
  greys,
  greysDark,
  greysDarkReversed,
}
