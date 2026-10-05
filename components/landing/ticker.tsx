import { StakeChip } from "./stake-chip"

// What people put on the line, scrolling past like the app's "also" ticker.
const ITEMS = [
  { what: "Go to the gym, 4 times a week", stake: "$20 on it" },
  { what: "Read 20 pages", stake: "Sam’s watching" },
  { what: "In bed by 11:30", stake: "3-day lock" },
  { what: "Ship the portfolio by Friday", stake: "$50 on it" },
  { what: "Run 5k, 3 times a week", stake: "Maya’s watching" },
  { what: "Practice Spanish for 20 min", stake: "$5 on it" },
  { what: "No phone after 10", stake: "1-week lock" },
  { what: "Call Mom on Sundays", stake: "$10 on it" },
]

function Ticker() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-3 pr-3"
    >
      {ITEMS.map((item) => (
        <li
          key={item.what}
          className="flex items-center gap-3 rounded-full bg-muted py-1.5 pr-1.5 pl-5 text-[15px] font-medium whitespace-nowrap"
        >
          {item.what}
          <StakeChip>{item.stake}</StakeChip>
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-2"
      aria-label="Things people put on the line"
    >
      <div className="flex w-max motion-safe:animate-[marquee_60s_linear_infinite]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

export { Ticker }
