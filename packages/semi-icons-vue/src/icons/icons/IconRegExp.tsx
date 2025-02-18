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
        d="M16.7519 1C17.5803 1 18.2519 1.67157 18.2519 2.5V5.19722L20.4198 3.75192C21.1091 3.2924 22.0404 3.47866 22.4999 4.16795C22.9595 4.85724 22.7732 5.78855 22.0839 6.24808L19.456 8L22.0839 9.75192C22.7732 10.2115 22.9595 11.1428 22.4999 11.8321C22.0404 12.5213 21.1091 12.7076 20.4198 12.2481L18.2519 10.8028V13.5C18.2519 14.3284 17.5803 15 16.7519 15C15.9234 15 15.2519 14.3284 15.2519 13.5V10.8028L13.0839 12.2481C12.3946 12.7076 11.4633 12.5213 11.0038 11.8321C10.5443 11.1428 10.7305 10.2115 11.4198 9.75192L14.0477 8L11.4198 6.24808C10.7305 5.78855 10.5443 4.85724 11.0038 4.16795C11.4633 3.47866 12.3946 3.2924 13.0839 3.75192L15.2519 5.19722V2.5C15.2519 1.67157 15.9234 1 16.7519 1Z"
        fill="currentColor"
      />
      <circle cx={6.5} cy={17.5} r={4.5} fill="currentColor" />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRegExp',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'reg_exp'} {...props}>
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
