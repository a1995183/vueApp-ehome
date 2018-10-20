<template>
    <div>
        <headerCom :title="name"></headerCom>
       <div>
            <div class="bMap" id="bMap">

        </div>
       </div>
    </div>
    
</template>

<script>
import headerCom from '@/components/header-Com'
import BMap from 'BMap';
export default {
    components:{
        headerCom
    },
    data(){
        return{
            name:'流动党员找组织',

                }
    },
    methods:{
        getData(){
            var map = new BMap.Map("bMap");          // 创建地图实例  
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var anchor = {type: BMAP_NAVIGATION_CONTROL_ZOOM}    
            map.addControl(new BMap.NavigationControl(anchor));   //PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方
            var point = new BMap.Point( 114.0110626126,33.0146812922);    
            var point1 = new BMap.Point( 114.0110626126,33.0146812923);    
            var point2 = new BMap.Point( 116.2179349808,40.2193424826,);    
             
            map.centerAndZoom(point, 100);    
            var marker2 = new BMap.Marker(point2);        // 创建标注    
            var marker = new BMap.Marker(point);        // 创建标注    
            var marker1 = new BMap.Marker(point1);        // 创建标注    
           var label = new BMap.Label("信息工程学院学生党支部 总支书记：杨鑫 电话：0396-2853187", {
            offset: new BMap.Size(15, -25)
            });
              var label1 = new BMap.Label("信息工程学院学生党支部 总支书记：杨晓阳 电话：0396-23432452", {
            offset: new BMap.Size(15, -25)
            });
              var label2 = new BMap.Label("信息工程学院流动党支部 支部书记：高阳 电话：13634343333", {
            offset: new BMap.Size(15, -25)
            });
            label2.setStyle({
                top:'-5px'
            })
            marker.setLabel(label); 
            marker1.setLabel(label1); 
            marker2.setLabel(label2); 
            map.addOverlay(marker);                     // 将标注添加到地图中 
            map.addOverlay(marker1);                     // 将标注添加到地图中 
            map.addOverlay(marker2);                     // 将标注添加到地图中 

            
        }
    },
   
    mounted(){
        this.getData()

    },
    created(){
    }
    
}
</script>
<style lang="scss" scoped>
#bMap{
    margin-top:44px;
    height:11.9807rem;
    max-height: 100%;
}
</style>
