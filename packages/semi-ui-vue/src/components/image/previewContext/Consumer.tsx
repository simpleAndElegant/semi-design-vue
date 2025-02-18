import { defineComponent, h, inject, Ref, ref, UnwrapRef, useSlots } from 'vue';
import { PreviewContextProps } from '../previewContext';

export function usePreviewContext(): { context: Ref<UnwrapRef<PreviewContextProps>> } {
  const context = inject('PreviewContext', ref<PreviewContextProps>({} as any));
  return {
    context,
  };
}
export const vuePropsType = {
  name: String,
};
const Consumer = defineComponent(() => {
  const slots = useSlots();
  const { context } = usePreviewContext();
  return () => (slots.default ? slots.default(context) : null);
});

Consumer.props = vuePropsType;

export default Consumer;
