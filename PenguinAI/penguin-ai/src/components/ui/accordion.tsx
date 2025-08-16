import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

interface AccordionContextType {
  type: "single" | "multiple"
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  collapsible?: boolean
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined)

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type: "single" | "multiple"
    value?: string | string[]
    onValueChange?: (value: string | string[]) => void
    collapsible?: boolean
  }
>(({ className, type, value, onValueChange, collapsible, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(
    type === "multiple" ? [] : ""
  )

  const currentValue = value ?? internalValue
  const handleValueChange = onValueChange ?? setInternalValue

  return (
    <AccordionContext.Provider value={{ type, value: currentValue, onValueChange: handleValueChange, collapsible }}>
      <div ref={ref} className={className} {...props} />
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
  }
>(({ className, value, ...props }, ref) => (
  <div ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const item = React.useContext(AccordionItemContext)
  
  const isOpen = context?.type === "multiple" 
    ? Array.isArray(context.value) && context.value.includes(item?.value || "")
    : context?.value === item?.value

  const handleClick = () => {
    if (!context || !item) return

    if (context.type === "multiple") {
      const currentValue = Array.isArray(context.value) ? context.value : []
      const newValue = isOpen 
        ? currentValue.filter(v => v !== item.value)
        : [...currentValue, item.value]
      context.onValueChange?.(newValue)
    } else {
      const newValue = isOpen && context.collapsible ? "" : item.value
      context.onValueChange?.(newValue)
    }
  }

  return (
    <button
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionItemContext = React.createContext<{ value: string } | undefined>(undefined)

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const item = React.useContext(AccordionItemContext)
  
  const isOpen = context?.type === "multiple" 
    ? Array.isArray(context.value) && context.value.includes(item?.value || "")
    : context?.value === item?.value

  if (!isOpen) return null

  return (
    <div
      ref={ref}
      className={cn("pb-4 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

// Wrap AccordionItem to provide context
const WrappedAccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
  }
>(({ value, children, ...props }, ref) => (
  <AccordionItemContext.Provider value={{ value }}>
    <AccordionItem ref={ref} value={value} {...props}>
      {children}
    </AccordionItem>
  </AccordionItemContext.Provider>
))

export { Accordion, WrappedAccordionItem as AccordionItem, AccordionTrigger, AccordionContent }