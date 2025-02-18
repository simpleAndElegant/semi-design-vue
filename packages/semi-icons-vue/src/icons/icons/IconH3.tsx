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
        d="M3.5 2.5C4.32843 2.5 5 3.17157 5 4V10.5H11V4C11 3.17157 11.6716 2.5 12.5 2.5C13.3284 2.5 14 3.17157 14 4V20C14 20.8284 13.3284 21.5 12.5 21.5C11.6716 21.5 11 20.8284 11 20V13.5H5V20C5 20.8284 4.32843 21.5 3.5 21.5C2.67157 21.5 2 20.8284 2 20V4C2 3.17157 2.67157 2.5 3.5 2.5Z"
        fill="currentColor"
      />
      <path
        d="M15.2139 18.9561C15.2139 20.2002 16.8135 21.2051 18.7959 21.2051C21.0928 21.2051 22.7266 20.0156 22.7266 18.3408C22.7266 17.1445 21.9199 16.2285 20.8125 16.167V15.9756C21.749 15.8867 22.4873 15.0391 22.4873 14.0547C22.4873 12.5508 20.9902 11.5117 18.8232 11.5117C16.8818 11.5117 15.248 12.4893 15.248 13.6514C15.248 14.2461 15.7266 14.6836 16.376 14.6836C16.7793 14.6836 17.1279 14.54 17.4355 14.2529C17.9346 13.7812 18.3174 13.5967 18.7822 13.5967C19.3838 13.5967 19.8145 13.9316 19.8145 14.3965C19.8145 14.8613 19.377 15.2031 18.7822 15.2031H18.4062C17.8389 15.2031 17.4355 15.6611 17.4355 16.2422C17.4355 16.8574 17.8389 17.2949 18.4062 17.2949H18.7822C19.5068 17.2949 19.9854 17.6641 19.9854 18.2109C19.9854 18.7578 19.5068 19.1201 18.7822 19.1201C18.2764 19.1201 17.832 18.9082 17.3809 18.4365C16.998 18.04 16.6562 17.8623 16.2734 17.8623C15.6582 17.8623 15.2139 18.3203 15.2139 18.9561Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconH3',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'h3'} {...props}>
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
