/**
 * Created by laury.lu on 2015/4/14.
 */

/// <reference path="dts/es6-promise.d.ts" />;
///  <reference path="dts/jquery.d.ts" />;


class CircleLoader {

    private progress = 0;
    public $;

    constructor(radius:number, color = 'black') {
        var clpR = 'rect(auto,auto,auto,' + radius  + 'px)';
        var clpL = 'rect(auto,' + radius  + 'px,auto,auto)';
        var $wr = $('<div class="J_cir_wr">');

        var $left = $('<div class="J_cir_left">')
            .append($('<div class="J_arc_left">'));
        var $right = $('<div class="J_cir_right">')
            .append($('<div class="J_arc_right">'));
        $wr.append($left).append($right);
        $wr
            .find('div').css({
                position: 'absolute',
                width: radius*2 + 'px',
                height: radius*2 + 'px',
                'border-radius': '100%',
                top: 0,
                left: 0
            })
            .find('.J_arc_right,.J_arc_left').css({background: color}).end().end()
            .find('.J_cir_left,.J_arc_left').css({clip: clpL}).end()
            .find('.J_cir_right,.J_arc_right').css({clip: clpR}).end()
            .find('.J_arc_left').css({transform:'rotate(180deg)'}).end()
            .find('.J_arc_right').css({transform:'rotate(180deg)'}).end()

        this.$ = $wr;
    }

    setProgress(progress:number):void {
        var deg = 0;
        if(progress<=50){
            //deg =;
            this.$.find('.J_arc_left').css({transform:'rotate('+(180- Math.ceil(progress*2/100*180))+'deg)'}).end()
            this.$.find('.J_arc_right').css({transform:'rotate('+180+'deg)'}).end()
        }else{
            this.$.find('.J_arc_left').css({transform:'rotate('+0+'deg)'}).end()
            //todo
            this.$.find('.J_arc_right').css({transform:'rotate('+(180- Math.ceil((progress-50)*2/100*180))+'deg)'}).end()
        }
    }

    getProgress():number {
        return this.progress;
    }
}
var mCir = new CircleLoader(70);
$('body').append(mCir.$);
mCir.setProgress(0);
var p :number = 0;
var cb = function(){
    mCir.setProgress(p)
    if(p<100){
        requestAnimationFrame(cb);
    }
    p++;
}
requestAnimationFrame(cb);
