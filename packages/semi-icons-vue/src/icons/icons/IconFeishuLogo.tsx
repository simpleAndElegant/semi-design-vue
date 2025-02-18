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
        d="M6.13732 3.80654C8.76716 5.98777 11.0232 8.49408 12.7428 11.4327L14.4397 9.75535C15.2458 8.96545 16.2113 8.34129 17.258 7.93496C16.7802 6.31936 16.0033 4.98005 14.9403 3.65376C14.8135 3.49449 14.6185 3.40346 14.4137 3.40346L6.28362 3.40021C6.06906 3.40021 5.9748 3.67001 6.13732 3.80654Z"
        fill="currentColor"
      />
      <path
        d="M20.5703 14.1922L20.58 14.1793L20.6155 14.1146C20.6026 14.1372 20.5864 14.1631 20.5703 14.1922Z"
        fill="currentColor"
      />
      <path
        d="M11.0361 14.5567C12.2714 15.0833 13.3766 15.5287 14.6899 15.883C17.0207 16.5136 19.2311 15.5709 20.3234 13.4872L21.6432 10.8541C21.939 10.2105 22.3128 9.6156 22.7647 9.07273C21.9715 8.78016 21.3149 8.63064 20.4534 8.63064C18.5518 8.63064 16.7606 9.36205 15.4018 10.6948L13.3831 12.6875C12.6647 13.3929 11.878 14.0203 11.0361 14.5567Z"
        fill="currentColor"
      />
      <path
        d="M20.7945 13.7752L20.8039 13.7566L20.8101 13.7473C20.8039 13.7535 20.8007 13.7659 20.7945 13.7752Z"
        fill="currentColor"
      />
      <path
        d="M1.62519 9.74885C1.47889 9.60906 1.23511 9.70983 1.23511 9.91463L1.23834 17.8724C1.23834 18.1 1.34887 18.3112 1.53416 18.4348C3.66663 19.8521 6.15343 20.5998 8.72151 20.5998C11.166 20.5998 13.5488 19.9171 15.6098 18.6266C16.3867 18.139 16.9979 17.7099 17.6512 17.0792C16.6013 17.388 15.4472 17.4075 14.2835 17.0922C9.37815 15.7594 5.20097 13.2044 1.62519 9.74885Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFeishuLogo',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'feishu_logo'} {...props}>
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
