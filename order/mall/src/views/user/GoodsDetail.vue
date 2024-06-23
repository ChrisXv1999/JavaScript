<template>
    <div class="goods-detail">
        <div class="goods">
            <a-image :src="goodDetail.href"/>
            <div class="operation">
                <div class="goods-name">
                    {{ goodDetail.goodsName }}
                </div>
                <div class="goods-describe overflow-hidden">
                    {{ goodDetail.describe }}
                </div>
                <div class="goods-price">
                    <span class="current">
                        {{ parseInt(goodDetail.goodsPrice / 100 * goodDetail.discount) }}元
                    </span>
                    <span class="origin" v-show="goodDetail.discount < 100">
                        {{ goodDetail.goodsPrice }}元
                    </span>
                </div>
                <h2>选择版本</h2>
                <div class="flex" style="padding: 0 20px;"><a-button v-for="item of versionList" :key="item" style="width: 240px;" :class="{current: item === currentVersion}" @click="changeVersion(item)">{{ item
                        }}</a-button></div>
                <h2>选择颜色</h2>
                <div class="flex" style="padding: 0 20px;"><a-button v-for="item of colorList" :key="item" style="width: 240px;" :class="{current: item === currentColor}"  @click="changeColor(item)">{{ item
                        }}</a-button></div>
                <div class="pay-methods" >
                    <AlipayCircleFilled />支付宝支付 <WechatFilled />微信支付 <AppleFilled /> applePay
                </div>
                <div class="buy">
                    <span v-show="!isLogin">购买请先登陆</span> &nbsp;&nbsp;&nbsp;
                    <a-button style="width: 320px;height: 36px;" :disabled="!isLogin"
                        type="primary" @click="onBuy">立即购买</a-button></div>
            </div>
        </div>
        <div>
            <a-descriptions title="处理器">
                <a-descriptions-item label="">
                    <pre>
                    台积电 4nm 工艺制程
                    CPU：八核处理器，最高主频 3.0GHz
                    GPU：Adreno GPU
                    AI：高通 AI 引擎
                </pre>
                </a-descriptions-item>
            </a-descriptions>
            <a-descriptions title="内存与容量">
                <a-descriptions-item label="">
                    <pre>
                    16GB + 1TB 最高可选
                    存储：256GB / 512GB / 1TB

                    LPDDR5X 高速内存
                    UFS 4.0 高速闪存
                    注：实际可用容量会由于诸多因素而减少并有所差异：由于操作系统运行占据了部分内存（RAM），实际可用空间小于标识内存容量；由于安装操
                    作系统和预装的程序占据了部分闪存（ROM），实际可用存储空间小于标识闪存容量。内存：12GB / 16GB

                </pre>
                </a-descriptions-item>

            </a-descriptions>
            <a-descriptions title="外观尺寸">
                <a-descriptions-item label="">
                    <pre>
                    高度：160.5mm
                    宽度：74.4mm
                    厚度：7.8mm
                    重量：179g
                    注：以上数据为小米实验室测试数据，依据行业内测量方式不同，实际结果可能略有差异。
                </pre>
                </a-descriptions-item>
            </a-descriptions>
            <a-descriptions title="屏幕和指纹">
                <a-descriptions-item label="">
                    <pre>
                        尺寸：6.67 英寸
                        分辨率：2712*1220
                        对比度：5,000,000:1
                        峰值亮度：2400nit
                        显示帧率：最高 120Hz
                        触控采样率：最高 480Hz*
                        瞬时触控采样率：2160Hz*
                        1920Hz 高频 PWM 调光｜ 12bit 色深｜DCI-P3 色域｜专业原色屏｜多屏同色｜阳光屏｜经典护眼｜
                        纸质护眼｜节律护眼 | HDR10+｜Dolby Vision｜屏下光学指纹｜暗光解锁｜湿手触控 | 超动态显示
                        
                        *需进入游戏后，在 GAMETURBO 中手动开启“速芯感测”，方可达到480Hz触控采样率。
                        *2160Hz瞬时采样率仅在部分游戏中生效，不同软件版本间存在差异，具体请以实际系统支持为准。第二代 1.5K 中国
                </pre>
                </a-descriptions-item>
            </a-descriptions> <a-descriptions title="充电与电池">
                <a-descriptions-item label="">
                    <pre>
                        5000 mAh(typ) / 4880mAh(min)
                        手机支持 QC3+ / PD2.0 / PD3.0 快充协议
                        USB Type-C 双面充电接口
                        标配 90W 充电器，兼容 PD 充电协议90W 有线快充内置锂离子聚合物电池，不可拆卸
                        小米澎湃 P2 快充芯片
                        小米澎湃电池管理系统
                </pre>
                </a-descriptions-item>
            </a-descriptions>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import emitter from '@/util/emitter';
import { isLogin,userConfig } from './composition/user';
const route = useRoute();
import { AlipayCircleFilled,WechatFilled, AppleFilled} from '@ant-design/icons-vue';
import { getGoodsList,addOrder } from '@/service/user';
import { message } from 'ant-design-vue';
const goodDetail = ref({});
async function init() {
    const { data } = await getGoodsList({ id: route.params.id });
    goodDetail.value = data[0] || {};
}
init()

const versionList = ref(['6GB+256GB', '6GB+512GB', '12GB+512GB', '12GB+1TB',])
const colorList = ref(['青刃', '冰钛', '墨晶', '镜瓷白',]);

async function onBuy(){
    const {goodsName,href,goodsPrice} = goodDetail.value;
    const data = {
        goodsPrice,
        goodsName,
        href,
        orderTimeStamp: +new Date(),
        status: false,
        username: userConfig.value.username
    }
    await addOrder(data);
    message.success('购买成功');
    emitter.emit('update-order')
}
const currentVersion = ref('')
function changeVersion(item) {
    currentVersion.value = item;
}
const currentColor = ref('')
function changeColor(item) {
    currentColor.value = item;
}
</script>
<style lang="scss" scoped>
.goods-detail {
    margin-top: 12px;
    padding: 0 8%;
}

.goods {
    display: flex;

    :deep(.ant-image) {
        flex: 1;
    }

    .operation {
        flex: 1;
        font-size: 16px;
        padding-left: 30px;

        &>*,
        .flex>* {
            margin-bottom: 12px;
        }

        h2 {
            font-size: 20px;
            line-height: 28px;
        }

        .goods-name {
            font-weight: bolder;
            font-size: 24px;
            color: #333;
        }

        .overflow-hidden {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
        }

        .goods-price {
            color: #ff6700;

            .origin {
                color: #b0b0b0;
                text-decoration: line-through;
            }
        }
        .current {
            border-color: red;
        }
        :deep(.pay-methods){
            text-align: right;
            svg {
                transform: scale(1.5);
                margin-right: 8px;
                
            }
            .anticon-alipay-circle {
                color: #09f;
            }
            .anticon-wechat {
                color: rgb(71, 202, 71);
            }   
        }
        .buy {
            span {
                opacity: 1;
            }
            
            text-align: right;

            .ant-button {
                background: #ff6700;
                cursor: pointer;
            }

        }
    }

}

.ant-descriptions {
    padding-top: 12px;
    &+& {
        border-top: 1px dashed #ccc;
    }
}

.flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>