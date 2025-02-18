import {defineComponent, h, inject, Ref, ref, UnwrapRef, useSlots} from 'vue'
import {NavContextType} from "../nav-context";


export function useNavContext (): { context: Ref<UnwrapRef<NavContextType>> } {
  const context = inject('NavContext', ref<NavContextType>({
    isCollapsed: false,
    selectedKeys: [],
    openKeys: [],
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
  const {context} = useNavContext()
  return () => slots.default ? slots.default(context) : null
})

Consumer.props = vuePropsType

export default Consumer

