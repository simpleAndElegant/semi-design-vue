import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // @ts-ignore
            focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7929 4.29289C16.1834 3.90237 16.8166 3.90237 17.2071 4.29289L19 6.08579L20.7929 4.29289C21.1834 3.90237 21.8166 3.90237 22.2071 4.29289C22.5976 4.68342 22.5976 5.31658 22.2071 5.70711L20.4142 7.5L22.2071 9.29289C22.5976 9.68342 22.5976 10.3166 22.2071 10.7071C21.8166 11.0976 21.1834 11.0976 20.7929 10.7071L19 8.91421L17.2071 10.7071C16.8166 11.0976 16.1834 11.0976 15.7929 10.7071C15.4024 10.3166 15.4024 9.68342 15.7929 9.29289L17.5858 7.5L15.7929 5.70711C15.4024 5.31658 15.4024 4.68342 15.7929 4.29289ZM22.7526 15.6585C23.1163 15.2429 23.0741 14.6111 22.6585 14.2474C22.2429 13.8838 21.6111 13.9259 21.2474 14.3415L18.4513 17.5371L17.2071 16.2929C16.8166 15.9024 16.1834 15.9024 15.7929 16.2929C15.4024 16.6834 15.4024 17.3166 15.7929 17.7071L17.7929 19.7071C17.9886 19.9028 18.2567 20.0087 18.5333 19.9995C18.8099 19.9902 19.0703 19.8668 19.2526 19.6585L22.7526 15.6585ZM1 5C1 4.44772 1.44772 4 2 4H13C13.5523 4 14 4.44772 14 5V10C14 10.5523 13.5523 11 13 11H2C1.44772 11 1 10.5523 1 10V5ZM3 6V9H12V6H3ZM2 13C1.44772 13 1 13.4477 1 14V19C1 19.5523 1.44772 20 2 20H13C13.5523 20 14 19.5523 14 19V14C14 13.4477 13.5523 13 13 13H2ZM3 18V15H12V18H3Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTrueFalseStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'true_false_stroked'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
IconComponent.props = iconVuePropsType;
export default IconComponent;
export { SvgComponent };
