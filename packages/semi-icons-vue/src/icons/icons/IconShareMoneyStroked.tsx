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
        d="M17 2C15.067 2 13.5 3.567 13.5 5.5C13.5 5.7339 13.5229 5.96245 13.5667 6.18351L8.30854 9.36924C7.69237 8.8281 6.8845 8.5 6 8.5C4.06702 8.5 2.5 10.067 2.5 12C2.5 13.933 4.06702 15.5 6 15.5C6.91857 15.5 7.75449 15.1461 8.37889 14.5673L13 17.298V14.9749L9.39709 12.8459C9.46432 12.575 9.5 12.2917 9.5 12C9.5 11.6753 9.4558 11.361 9.37308 11.0627L14.5043 7.95388C15.1393 8.59958 16.0229 9 17 9C18.933 9 20.5 7.43298 20.5 5.5C20.5 3.567 18.933 2 17 2ZM15.5 5.5C15.5 4.67158 16.1716 4 17 4C17.8284 4 18.5 4.67158 18.5 5.5C18.5 6.32841 17.8284 7 17 7C16.1716 7 15.5 6.32841 15.5 5.5ZM4.5 12C4.5 11.1716 5.17158 10.5 6 10.5C6.82841 10.5 7.5 11.1716 7.5 12C7.5 12.8284 6.82841 13.5 6 13.5C5.17158 13.5 4.5 12.8284 4.5 12ZM16.0303 13.0197L18 14.9893L19.9697 13.0197C20.2626 12.7268 20.7374 12.7268 21.0303 13.0197C21.3232 13.3126 21.3232 13.7874 21.0303 14.0803L19.1032 16.0074H21C21.4142 16.0074 21.75 16.3432 21.75 16.7574C21.75 17.1716 21.4142 17.5074 21 17.5074H18.75V18.5074H21C21.4142 18.5074 21.75 18.8432 21.75 19.2574C21.75 19.6717 21.4142 20.0074 21 20.0074H18.75V21.2506C18.75 21.6648 18.4142 22.0006 18 22.0006C17.5858 22.0006 17.25 21.6648 17.25 21.2506V20.0074H15C14.5858 20.0074 14.25 19.6717 14.25 19.2574C14.25 18.8432 14.5858 18.5074 15 18.5074H17.25V17.5074H15C14.5858 17.5074 14.25 17.1716 14.25 16.7574C14.25 16.3432 14.5858 16.0074 15 16.0074H16.8968L14.9697 14.0803C14.6768 13.7874 14.6768 13.3126 14.9697 13.0197C15.2626 12.7268 15.7374 12.7268 16.0303 13.0197Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconShareMoneyStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'share_money_stroked'} {...props}>
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
