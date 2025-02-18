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
        d="M5.50493 1.75002C5.82595 1.7521 6.11005 1.95827 6.21157 2.26283L8.54063 9.25H15.4595L17.7885 2.26283C17.8901 1.95827 18.1742 1.7521 18.4952 1.75002C18.8162 1.74793 19.103 1.9504 19.2084 2.25361L23.2084 13.7536C23.3178 14.068 23.2068 14.4168 22.936 14.6103L12.436 22.1103C12.1752 22.2966 11.8249 22.2966 11.5641 22.1103L1.06413 14.6103C0.793272 14.4168 0.682334 14.068 0.791684 13.7536L4.79168 2.25361C4.89715 1.9504 5.1839 1.74793 5.50493 1.75002ZM14.9451 10.75H9.055L12.0001 19.217L14.9451 10.75ZM9.83512 17.5588L7.46685 10.75H4.44217L9.83512 17.5588ZM3.9463 9.25H6.95949L5.48495 4.82639L3.9463 9.25ZM3.15118 11.536L8.11563 17.8037L2.39289 13.7161L3.15118 11.536ZM15.8845 17.8037L21.6072 13.7161L20.8489 11.536L15.8845 17.8037ZM20.0538 9.25H17.0406L18.5152 4.82639L20.0538 9.25ZM19.5579 10.75L14.165 17.5588L16.5333 10.75H19.5579Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconGitlabLogo',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'gitlab_logo'} {...props}>
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
