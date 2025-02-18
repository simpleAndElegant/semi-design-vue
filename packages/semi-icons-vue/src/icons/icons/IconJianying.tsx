import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 22 22"
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
        d="M0 5.57329C0 4.01402 1.27346 2.75 2.84437 2.75H15.0665C16.5999 2.75 17.8526 3.95845 17.9109 5.46564C17.9109 5.46568 17.9109 5.46572 17.9109 5.46576L21.8209 3.54974C21.9033 3.50937 21.9998 3.56885 21.9998 3.66009V5.43009C21.9998 5.5072 21.9558 5.57758 21.8862 5.61163L11.1145 10.8903L11.0726 10.9104L21.8862 16.2106C21.9558 16.2446 21.9997 16.3151 21.9997 16.3921V18.1597C21.9997 18.2508 21.9033 18.3103 21.821 18.2699L17.9068 16.3551C17.9068 16.3551 17.9068 16.3552 17.9068 16.3552C17.8377 17.8732 16.5917 19.0695 15.0692 19.0695H2.84708C1.27468 19.0695 0 17.8043 0 16.2435V14.5547C0 14.3394 0.0962586 14.1685 0.294199 14.085L6.78013 10.9105L6.78025 10.9104L6.78013 10.9104L0.299622 7.73988C0.113883 7.64568 0 7.46671 0 7.27562V5.57329ZM8.92641 9.85943L8.96561 9.84065L16.0237 6.38757V5.83302C16.0237 5.1681 15.4773 4.62592 14.8062 4.62592H3.1101C2.44131 4.62592 1.89399 5.16904 1.89399 5.83288V6.41302L8.92629 9.85937L8.92641 9.85943ZM8.92791 11.9614L8.92764 11.9615L1.89534 15.4092V15.9852C1.89534 16.6526 2.44171 17.1949 3.11146 17.1949H14.8062C15.4793 17.1949 16.025 16.6533 16.025 15.9852V15.4333L8.92791 11.9614Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconJianying',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'jianying'} {...props}>
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
