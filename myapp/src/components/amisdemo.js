import * as React from 'react';
import 'amis/lib/themes/default.css';
import axios from 'axios';
import copy from 'copy-to-clipboard';

import { render as renderAmis } from 'amis';
import { alert, confirm } from 'amis/lib/components/Alert';
import { toast } from 'amis/lib/components/Toast';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <p>通过 amis 渲染页面</p>
                {renderAmis(
                    {
                        "type": "page",
                        "body": {
                            "type": "form",
                            "api": "https://houtai.baidu.com/api/mock2/form/saveForm",
                            "controls": [
                                {
                                    "type": "text",
                                    "name": "name",
                                    "label": "姓名："
                                },
                                {
                                    "type": "text",
                                    "name": "age",
                                    "label": "年龄："
                                },
                                {
                                    "type": "static-tpl",
                                    "tpl": "生成的id为：${id}"
                                }
                            ]
                        }
                    },
                )}
            </div>
        );
    }
}

export default MyComponent