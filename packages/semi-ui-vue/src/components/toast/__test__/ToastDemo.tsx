import {defineComponent, ref, h, Fragment, useSlots, onMounted} from 'vue'
import Button from "../../button";
import Toast, {ToastList} from "../index";
import {throttle} from "lodash";

interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const ToastDemo = defineComponent<ExampleProps>((props, {}) => {
  const slots = useSlots()
  // const Toast = useToastHook()
  const opts = ref({
    content: 'Hi, Bytedance dance dance',
    duration: 3,
  });

  const handleClose = () => {
    throttled.cancel();
  };
  const throttleOpts = {
    content: 'Hi, Bytedance dance dance',
    duration: 10,
    onClose: handleClose,
  };
  const throttled = throttle(() => Toast.info(throttleOpts), 10000, {trailing: false});

  Toast.info(opts.value)
  return () => (
    <div>

      <ToastList ref={(instance: any) => {
        instance.add({...{
            motion: true,
            zIndex: 1010,
            content: 'test',
          }, id: 'id'});
      }}/>
      <div>
        <Button onClick={() => {
          Toast.info(opts.value)
          setTimeout(() => {
            opts.value = {
              content: 'Hi, Bytedansssssssssssce dance dance',
              duration: 3,
            }
          }, 1000)
        }}>Display Toast</Button>
        <br/>


        <br/>
        <Button onClick={throttled} className={'Throttled'}>Throttled Toast</Button>

      </div>
    </div>
  )
})

ToastDemo.props = vuePropsType
ToastDemo.name = 'ToastDemo'

export default ToastDemo

