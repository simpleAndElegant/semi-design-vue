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
        d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V10C22 10.5523 21.5523 11 21 11C20.4477 11 20 10.5523 20 10V4L4 4V20H12C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22H4C2.89543 22 2 21.1046 2 20V4ZM6 9C6 8.44772 6.44772 8 7 8H13C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10H7C6.44772 10 6 9.55228 6 9ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H7ZM14.9697 13.0197C15.2626 12.7268 15.7374 12.7268 16.0303 13.0197L18 14.9893L19.9697 13.0197C20.2626 12.7268 20.7374 12.7268 21.0303 13.0197C21.3232 13.3126 21.3232 13.7874 21.0303 14.0803L19.1032 16.0074H21C21.4142 16.0074 21.75 16.3432 21.75 16.7574C21.75 17.1716 21.4142 17.5074 21 17.5074H18.75V18.5074H21C21.4142 18.5074 21.75 18.8432 21.75 19.2574C21.75 19.6717 21.4142 20.0074 21 20.0074H18.75V21.2506C18.75 21.6648 18.4142 22.0006 18 22.0006C17.5858 22.0006 17.25 21.6648 17.25 21.2506V20.0074H15C14.5858 20.0074 14.25 19.6717 14.25 19.2574C14.25 18.8432 14.5858 18.5074 15 18.5074H17.25V17.5074H15C14.5858 17.5074 14.25 17.1716 14.25 16.7574C14.25 16.3432 14.5858 16.0074 15 16.0074H16.8968L14.9697 14.0803C14.6768 13.7874 14.6768 13.3126 14.9697 13.0197Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTaskMoneyStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'task_money_stroked'} {...props}>
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
