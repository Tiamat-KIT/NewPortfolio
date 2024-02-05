"use client";
import { useLayoutEffect, useState } from "react"
import "../../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"

const ThemeTogglerClass = tv({
    base: "",
    /*
        variants: { } ,
        defaultVariants: { },
    */
})

type ThemeTogglerVariants = VariantProps<typeof ThemeTogglerClass>

interface ThemeTogglerProps extends ThemeTogglerVariants {
    /* children?: React.ReactNode */
}

export default function ThemeToggler(plop: ThemeTogglerProps){
    const [isdark, setIsdark] = useState<boolean>(false);
      useLayoutEffect(() => {
        if (isdark) {
          document.documentElement.setAttribute("data-theme",'dark');
        } else {
          document.documentElement.setAttribute("data-theme",'light');
        }
    }, [isdark]);

    return (
        <div className={ ThemeTogglerClass(plop) }>
            {/* {plop.children} */}
            <input 
                type="checkbox"
                checked={isdark}
                onChange={() => setIsdark(!isdark)}
                value="synthwave" className="toggle theme-controller"
            />
        </div>
    )
}