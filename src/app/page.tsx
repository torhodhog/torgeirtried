import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, Check, CheckCircleIcon, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Gratis frakt",
    Icon: ArrowDownToLine,
    description: "På alle bestillinger over 1000 kr"
  },
  {
    name: "Garanter kvalitet",
    Icon: CheckCircleIcon,
    description: "Vi har fokus på kvalitet og originalitet og ønsker at alle produkter vi selger skal være av ypperste kvalitet. Ikke fornøyd? Vi har 30 dagers åpent kjøp."
  },
  {
    name: "Bærekraft",
    Icon: Leaf,
    description: "Med brukte drakter tar vi vare på planeten, samtidig som vi tar vare på historien til fotballen."
  },
]

export default function Home() {
  
  return (
  <>
  <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Velkommen til{" "}
        <span className="text-green-600">fotballdraktbutikken</span>.
      </h1>
      <p className="mt-6 text-large max-w-prose text-muted-foreground">Vår produktliste oppdateres fortløpende.</p>
      <div className="flex flex-col sm:flew-row gap-4 mt-6">
        <Link href='/products' className={buttonVariants()}>Se alle produkter</Link>
        <Button variant="outline">Kontakt oss &rarr;</Button>
      </div>
    </div>

    {/*  TODO : list */ }
  </MaxWidthWrapper>
<section className="border-t border-gray-200 bg-gray-50">
<MaxWidthWrapper className="py-20">
  <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
    {perks.map((perk) => (
      <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
        <div className="md:flex-shrink-0 flex justify-center">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
            {<perk.Icon className="w-1/3 h-1/3"/>}
          </div>
        </div>
        <div className="mt-6 md:ml-4 md-mt-0 lg:ml-0 lg:mt-6">
          <h3 className="text-base front-medium text-gray-900">{perk.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
        </div>
      </div>
    ))}
  </div>
</MaxWidthWrapper>
</section>
</>
)
}
