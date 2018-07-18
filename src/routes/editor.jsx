import React from 'react';

export default class Editor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id || null,
            ueEditor: null
        }
    }

    componentDidMount() {
        var UE = window.UE;
        let { id } = this.state;
        if (id) {
            try {
                UE.delEditor(id);
            } catch (error) { }
            let ueEditor = UE.getEditor(id, {
                autoHeightEnabled: true,
                autoFloatEnabled: true,
                //字体大小
                'fontsize': [10, 11, 12, 14, 16, 18, 20, 24, 36, 48],
                // 上传图片时后端提供的接口
                serverUrl: '/sundax/upload/memberFileUploadService/uploadFileAllowAnonymous',
                enableAutoSave: false,
                autoHeightEnabled: false,
                initialFrameHeight: this.props.height,
                initialFrameWidth: '100%',
            });
            this.setState({ ueEditor });
            //判断有没有默认值
            ueEditor.ready((ueditr) => {
                var value = this.props.value ? this.props.value : '<p></p>';
                ueEditor.setContent(value);
            });
            //将文本回调回去
            ueEditor.addListener('selectionchange', (type) => {
                //console.log(ueEditor.getContent())
                this.props.callback(ueEditor.getContent());
            });

            //清空富文本内容
            //this.refs.ueditor.changeContent("");
        }

    }

    render() {
        let { id } = this.state;
        return (<div>
            <textarea id={id} style={{ width: this.props.width, height: this.props.height }}></textarea>
        </div>)
    }
}