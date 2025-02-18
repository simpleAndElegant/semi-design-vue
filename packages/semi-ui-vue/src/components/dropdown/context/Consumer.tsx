import {defineComponent, h, inject, Ref, ref, UnwrapRef, useSlots} from 'vue'
import {DropdownContextType} from "../context";



export function useDropdownContext (): { context: Ref<UnwrapRef<DropdownContextType>> } {
  const context = inject('DropdownContext', ref<DropdownContextType>({
    level: 0,
  }))
  return {
    context
  }
}
export const vuePropsType = {
  name: String
}
const Consumer = defineComponent(() => {
  const slots = useSlots()
  const {context} = useDropdownContext()
  return () => slots.default ? slots.default(context) : null
})

Consumer.props = vuePropsType

export default Consumer

