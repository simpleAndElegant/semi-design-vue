import {defineComponent, ref, h, Fragment, reactive, onMounted} from 'vue'
import Tooltip from '../tooltip';
import { cssClasses } from '@douyinfe/semi-foundation/typography/constants';
import copyModel from 'copy-text-to-clipboard';
import cls from 'classnames';
import { noop } from '@douyinfe/semi-foundation/utils/function';
import LocaleConsumer from '../locale/localeConsumer';
import { IconCopy, IconTick } from '@kousum/semi-icons-vue';
import { BaseProps } from '../_base/baseComponent';
import { Locale } from '../locale/interface';
import isEnterPress from '@douyinfe/semi-foundation/utils/isEnterPress';

const prefixCls = cssClasses.PREFIX;
export interface CopyableProps extends BaseProps {
  content?: string;
  copyTip?: any;
  duration?: number;
  forwardRef?: any;
  successTip?: any;
  onCopy?: (e: any, content: string, res: boolean) => void;
}
interface CopyableState {
  copied: boolean;
  item: string;
}

export const vuePropsType = {
  name: String,
  forwardRef:Object,
  content: {
    type: String,
    default: '',
  },
  onCopy: {
    type: Function,
    default: noop
  },
  duration: {
    type: Number,
    default: 3,
  },
  style: {
    type: [Object, String],
    default:{}
  },
  className: {
    type: String,
    default: '',
  },
}


const Copyable = defineComponent<CopyableProps>((props, {slots}) => {


  let _timeId: ReturnType<typeof setTimeout>;

  const state = reactive({
    copied: false,
    item: '',
  });

  onMounted(()=>{
    if (_timeId) {
      clearTimeout(_timeId);
      _timeId = null;
    }
  })

  const copy = (e: MouseEvent) => {
    const { content, duration, onCopy } = props;
    const res = copyModel(content);
    onCopy && onCopy(e, content, res);
    setCopied(content, duration);
  };

  const setCopied = (item: string, timer: number) => {
    state.copied = true
    state.item = item

    _timeId = setTimeout(() => {
      resetCopied();
    }, timer * 1000);
  };

  const resetCopied = () => {
    if (_timeId) {
      clearTimeout(_timeId);
      _timeId = null;
      state.copied = false
      state.item = ''
    }
  };

  const LocaleConsumerDom = LocaleConsumer()
  const renderSuccessTip = () => {
    const { successTip } = props;
    if (typeof successTip !== 'undefined') {
      return successTip;
    }
    return (
      <LocaleConsumerDom componentName="Typography">
        {(locale: Locale['Typography']) => (
          <span>
            <IconTick />
            {locale.copied}
          </span>
        )}
      </LocaleConsumerDom>
    );
  };

  return () => {
    const { style, className, forwardRef, copyTip } = props;
    const { copied } = state;
    const finalCls = cls(className, {
      [`${prefixCls}-action-copy`]: !copied,
      [`${prefixCls}-action-copied`]: copied,
    });
    return (
      <LocaleConsumerDom componentName="Typography">
        {(locale: Locale['Typography']) => (
          <span style={{ marginLeft: '4px', ...style }} class={finalCls} ref={forwardRef}>
                        {copied ? (
                          renderSuccessTip()
                        ) : (
                          <Tooltip content={typeof copyTip !== 'undefined' ? copyTip : locale.copy}>
                            {/* TODO: replace `a` tag with `span` in next major version
                                NOTE: may have effect on style */}
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class={`${prefixCls}-action-copy-icon`}>
                              <IconCopy
                                // @ts-ignore
                                role="button"
                                tabIndex={0}
                                onClick={copy}
                                onKeypress={(e:any) => isEnterPress(e) && copy(e as any)}
                              />
                            </a>
                          </Tooltip>
                        )}
                    </span>
        )}
      </LocaleConsumerDom>
    );
  }
})

Copyable.props = vuePropsType

export default Copyable

