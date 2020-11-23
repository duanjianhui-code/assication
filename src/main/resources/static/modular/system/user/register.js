/**
 * 注册
 */
var registerDlg = {
    registerData: {},
    validateFields: {
        account: {
            validators: {
                notEmpty: {
                    message: '学号不能为空'
                },
                stringLength: {
                    min: 6,
                    max: 18,
                    message: '学号长度必须在6到18位之间'
                },
                digits: {
                    message: '只能输入数字'
                }
            }
        },
        password: {
            validators: {
                notEmpty: {
                    message: '密码不能为空'
                },
                identical: {
                    field: 'rePassword',
                    message: '两次密码不一致'
                },
                stringLength: {
                    min: 6,
                    max: 18,
                    message: '密码长度必须在6到18位之间'
                },
                regexp: {
                    regexp: /^[^ ]+$/,
                    message: '密码不能有空格'
                }
            }
        },
        rePassword: {
            validators: {
                notEmpty: {
                    message: '密码不能为空'
                },
                identical: {
                    field: 'password',
                    message: '两次密码不一致'
                }
            }
        }
    }
};

registerDlg.validate = function () {
    $('#registerForm').data("bootstrapValidator").resetForm();
    $('#registerForm').bootstrapValidator('validate');
    return $("#registerForm").data('bootstrapValidator').isValid();
};

$(function () {
    Feng.initValidator("registerForm", registerDlg.validateFields);
});

