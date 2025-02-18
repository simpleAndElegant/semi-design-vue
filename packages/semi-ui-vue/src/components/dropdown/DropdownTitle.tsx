import {defineComponent, ref, h, onActivated, Fragment, inject} from 'vue'

import { cssClasses } from '@douyinfe/semi-foundation/dropdown/constants';
import cls from 'classnames';
import { BaseProps } from '../_base/baseComponent';
import {DropdownContext} from "./context";
import {useDropdownContext} from "./context/Consumer";

const prefixCls = cssClasses.PREFIX;
export type DropdownTitleProps = BaseProps;


export const vuePropsType = {
  name: String
}
const DropdownTitle = defineComponent<DropdownTitleProps>((props, {slots}) => {
  const { className, style,  } = props;
  const {context} = useDropdownContext();
  const titleCls = cls({
    [`${prefixCls}-title`]: true,
    [`${prefixCls}-title-withTick`]: context.value.showTick,
  }, className);
  return ()=>(
    <div class={titleCls} style={style}>
      {slots.default?slots.default():null}
    </div>
  );
})

DropdownTitle.props = vuePropsType

export default DropdownTitle

