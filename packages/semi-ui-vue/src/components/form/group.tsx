/* eslint-disable react/destructuring-assignment */
import classNames from 'classnames';
import { isString } from 'lodash';
import { isValid } from '@douyinfe/semi-foundation/form/utils';
import { cssClasses } from '@douyinfe/semi-foundation/form/constants';
import * as ObjectUtil from '@douyinfe/semi-foundation/utils/object';
import ErrorMessage, { ReactFieldError } from './errorMessage';
import Label, { LabelProps } from './label';
import { FormUpdaterContext } from './context';
import { useFormState } from './hooks/index';
import InputGroup, { InputGroupProps as BacisInputGroupProps } from '../input/inputGroup';
import { BaseFormProps, FormState } from './interface';
import { FormUpdaterContextType } from '@douyinfe/semi-foundation/form/interface';
import { Col, Row } from '../grid/index';
import {defineComponent, h, useSlots, Fragment, cloneVNode} from "vue";
import {useFormUpdaterContext} from "./context/FormUpdaterContext/Consumer";
import {noop} from "@douyinfe/semi-foundation/utils/function";
interface GroupErrorProps {
    showValidateIcon?: boolean;
    isInInputGroup?: boolean;
    error?: ReactFieldError;
    fieldSet?: string[];
}
export interface InputGroupProps extends BacisInputGroupProps {
    label?: LabelProps;
    labelPosition?: 'left' | 'top';
}

const prefix = cssClasses.PREFIX;

// Group component to remove Labels and ErrorMessages from its child fields
// Unified insertion of Labels and ErrorMessages from the group level

// Get Errors of all field in this group
const GroupError = (props: GroupErrorProps) => {
    const { fieldSet } = props;
    const formState = useFormState();
    const error = fieldSet.map((field: string) => ObjectUtil.get(formState.value.errors, field));

    if (isValid(error)) {
        return null;
    }
    return (
        <ErrorMessage error={error} showValidateIcon={props.showValidateIcon} isInInputGroup={props.isInInputGroup} />
    );
};



export const vuePropsType = {
    className: { type: String, default: '' },
    size: { type: String, default: 'default' },
    style: [String, Object],
    onBlur: {
        type: Function,
        default: noop,
    },
    onFocus: {
        type: Function,
        default: noop,
    },
    label: Object,
    labelPosition: String,
    disabled: Boolean,
}
const FormInputGroup = defineComponent<InputGroupProps>((props, {}) => {
    const slots = useSlots()
    
    const {context} = useFormUpdaterContext()
    function renderLabel(label: LabelProps, formProps: BaseFormProps) {
        if (label) {
            if (isString(label)) {
                return (<Label width={formProps.labelWidth} text={label} />);
            } else {
                return (<Label width={formProps.labelWidth} {...label} />);
            }
        }
        return null;
    }

    return () => {
        const children= slots.default?.()
        const { label, ...rest } = props;
        const updater = context;
        const formProps = updater.value.getFormProps(['labelPosition', 'labelWidth', 'labelAlign', 'showValidateIcon', 'wrapperCol', 'labelCol']);
        const labelPosition = props.labelPosition || formProps.labelPosition;
        const groupFieldSet: Array<string> = [];
        const inner = children.map((child: any) => {
            if (child && child.props && child.props.field) {
                groupFieldSet.push(child.props.field);
                return cloneVNode(child, {
                    isInInputGroup: true,
                    // noErrorMessage: true,
                    // noLabel: true
                });
            }
            return null;
        });

        const groupCls = classNames({
            [`${prefix}-field-group`]: true
        });

        const labelCol = formProps.labelCol;
        const wrapperCol = formProps.wrapperCol;
        const labelAlign = formProps.labelAlign;
        const appendCol = labelCol && wrapperCol;

        const labelColCls = labelCol ? `${prefix}-col-${labelAlign}` : '';

        const labelContent = renderLabel(label, formProps);
        const inputGroupContent = (
          <InputGroup {...rest}>
              {inner}
          </InputGroup>
        );
        const groupErrorContent = (<GroupError fieldSet={groupFieldSet} showValidateIcon={formProps.showValidateIcon} isInInputGroup />);

        let content: any;

        switch (true) {
            case !appendCol:
                content = (
                  <>
                      {labelContent}
                      <div>
                          {inputGroupContent}
                          {groupErrorContent}
                      </div>
                  </>
                );
                break;
            case appendCol && labelPosition === 'top':
                // When labelPosition is top, you need to add an overflow hidden div to the label, otherwise it will be arranged horizontally
                content = (
                  <>
                      <div style={{ overflow: 'hidden' }}>
                          <Col {...labelCol} className={labelColCls}>
                              {labelContent}
                          </Col>
                      </div>
                      <Col {...wrapperCol}>
                          {inputGroupContent}
                          {groupErrorContent}
                      </Col>
                  </>
                );
                break;
            case appendCol && labelPosition !== 'top':
                content = (
                  <>
                      <Col {...labelCol} className={labelColCls}>
                          {labelContent}
                      </Col>
                      <Col {...wrapperCol}>
                          {inputGroupContent}
                          {groupErrorContent}
                      </Col>
                  </>
                );
                break;
            default:
                break;
        }



        return (
          <div x-label-pos={labelPosition} class={groupCls}>
              {content}
          </div>
        );
    }
})

FormInputGroup.props = vuePropsType
FormInputGroup.name = 'FormInputGroup'

export default FormInputGroup

