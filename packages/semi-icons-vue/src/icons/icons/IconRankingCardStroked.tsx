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
        d="M3 3.5C1.89543 3.5 1 4.39543 1 5.5V18.5C1 19.6046 1.89543 20.5 3 20.5H21C22.1046 20.5 23 19.6046 23 18.5V5.5C23 4.39543 22.1046 3.5 21 3.5H3ZM3 5.5H21V18.5H3V5.5ZM8 8.5V15H8.5C8.77614 15 9 15.2239 9 15.5V16.5C9 16.7761 8.77614 17 8.5 17H5.5C5.22386 17 5 16.7761 5 16.5V15.5C5 15.2239 5.22386 15 5.5 15H6V9H5.5C5.22386 9 5 8.77614 5 8.5V7.5C5 7.22386 5.22386 7 5.5 7H6H7H7.5C7.77614 7 8 7.22386 8 7.5V8V8.5ZM10 8.25C10 7.55964 10.5596 7 11.25 7H17.75C18.4404 7 19 7.55964 19 8.25V11.75C19 12.4404 18.4404 13 17.75 13H11.25C10.5596 13 10 12.4404 10 11.75V8.25ZM12 9V11H17V9H12ZM10.5 15C10.2239 15 10 15.2239 10 15.5V16.5C10 16.7761 10.2239 17 10.5 17H18.5C18.7761 17 19 16.7761 19 16.5V15.5C19 15.2239 18.7761 15 18.5 15H10.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRankingCardStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'ranking_card_stroked'} {...props}>
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
