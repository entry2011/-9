//스테이크 블록은 0.5버전 입니다.
//모든 코드는 2차제작, 2차 배포가 가능합니다.
Entry.SteakBlocks = [
{
category: 'start',
blocks: [
'when_run_button_click',
'when_some_key_pressed',
'mouse_clicked',
'mouse_click_cancled',
'when_object_click',
'when_object_click_canceled',
'when_message_cast',
'message_cast',
'message_cast_wait',
'when_scene_start',
'start_scene',
'start_neighbor_scene',
'check_object_property',
'check_block_execution',
'switch_scope',
'is_answer_submited',
'check_lecture_goal',
'check_variable_by_name',
'show_prompt',
'check_goal_success',
'positive_number',
'negative_number',
'wildcard_string',
'wildcard_boolean',
'register_score',
],
},
{
category: 'flow',
blocks: [
'wait_second',
'repeat_basic',
'repeat_inf',
'repeat_while_true',
'stop_repeat',
'_if',
'if_else',
'wait_until_true',
'stop_object',
'restart_project',
'when_clone_start',
'create_clone',
'delete_clone',
'remove_all_clones',
],
},
{
category: 'moving',
blocks: [
'move_direction',
'bounce_wall',
'move_x',
'move_y',
'move_xy_time',
'locate_x',
'locate_y',
'locate_xy',
'locate_xy_time',
'locate',
'locate_object_time',
'rotate_relative',
'direction_relative',
'rotate_by_time',
'direction_relative_duration',
'rotate_absolute',
'direction_absolute',
'see_angle_object',
'move_to_angle',
],
},
{
category: 'looks',
blocks: [
'show',
'hide',
'dialog_time',
'dialog',
'remove_dialog',
'change_to_some_shape',
'change_to_next_shape',
'add_effect_amount',
'change_effect_amount',
'erase_all_effects',
'change_scale_size',
'set_scale_size',
'flip_x',
'flip_y',
'change_object_index',
],
},
{
category: 'brush',
blocks: [
'brush_stamp',
'start_drawing',
'stop_drawing',
'set_color',
'set_random_color',
'change_thickness',
'set_thickness',
'change_brush_transparency',
'set_brush_tranparency',
'brush_erase_all',
],
},
{
category: 'text',
blocks: ['text_blue', 'text_orange', 'text_Yello', 'text_gray ', 'text_flush'],
},
{
category: 'sound',
blocks: [
'sound_something_with_block',
'sound_something_second_with_block',
'sound_from_to',
'sound_something_wait_with_block',
'sound_something_second_wait_with_block',
'sound_from_to_and_wait',
'sound_volume_change',
'sound_volume_set',
'sound_silent_all',
],
},
{
category: 'judgement',
blocks: [
'is_clicked',
'is_press_some_key',
'reach_something',
'boolean_basic_operator',
'boolean_and_or',
'boolean_not',
],
},
{
category: 'calc',
blocks: [
'calc_basic',
'calc_rand',
'coordinate_mouse',
'coordinate_object',
'get_sound_volume',
'quotient_and_mod',
'calc_operation',
'get_project_timer_value',
'choose_project_timer_action',
'set_visible_project_timer',
'get_date',
'distance_something',
'get_sound_duration',
'get_user_name',
'length_of_string',
'combine_something',
'char_at',
'substring',
'index_of_string',
'replace_string',
'change_string_case',
],
},
{
category: 'variable',
blocks: [
'variableAddButton',
'listAddButton',
'ask_and_wait',
'get_canvas_input_value',
'set_visible_answer',
'get_variable',
'change_variable',
'set_variable',
'show_variable',
'hide_variable',
'value_of_index_from_list',
'add_value_to_list',
'remove_value_from_list',
'insert_value_to_list',
'change_value_list_index',
'length_of_list',
'is_included_in_list',
'show_list',
'hide_list',
],
},
{
category: 'func',
blocks: ['functionAddButton'],
},
{
category: 'analysis',
blocks: [
'analizyDataAddButton',
'append_row_to_table',
'insert_row_to_table',
'delete_row_from_table',
'set_value_from_table',
'get_table_count',
'get_value_from_table',
'calc_values_from_table',
'open_table_chart',
'close_table_chart',
],
},
{
category: 'ai_utilize',
blocks: [
'aiUtilizeBlockAddButton',
'aiUtilizeModelTrainButton',
'audio_title',
'check_microphone',
'speech_to_text_convert',
'speech_to_text_get_value',
'get_microphone_volume',
'tts_title',
'read_text',
'read_text_wait_with_block',
'set_tts_property',
'translate_title',
'get_translated_string',
'check_language',
'video_title',
'video_draw_webcam',
'video_check_webcam',
'video_flip_camera',
'video_set_camera_opacity_option',
'video_motion_value',
'video_toggle_model',
'video_is_model_loaded',
'video_number_detect',
'video_toggle_ind',
'video_body_part_coord',
'video_face_part_coord',
'video_detected_face_info',
],
},
{
category: 'expansion',
blocks: [
'expansionBlockAddButton',
'weather_title',
'check_weather',
'check_finedust',
'get_weather_data',
'get_current_weather_data',
'get_today_temperature',
'check_city_weather',
'check_city_finedust',
'get_city_weather_data',
'get_current_city_weather_data',
'get_today_city_temperature',
'festival_title',
'count_festival',
'get_festival_info',
'behaviorConductDisaster_title',
'count_disaster_behavior',
'get_disaster_behavior',
'behaviorConductLifeSafety_title',
'count_lifeSafety_behavior',
'get_lifeSafety_behavior',
],
},
{
category: 'arduino',
blocks: [
'arduino_reconnect',
'arduino_open',
'arduino_cloud_pc_open',
'arduino_connect',
'arduino_download_connector',
'download_guide',
'arduino_download_source',
'arduino_noti',
].concat(EntryStatic.DynamicHardwareBlocks),
}
];
EntryStatic.getAllBlocks = () => {
return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
{ category: 'start', visible: true },
{ category: 'flow', visible: true },
{ category: 'moving', visible: true },
{ category: 'looks', visible: true },
{ category: 'brush', visible: true },
{ category: 'text', visible: true },
{ category: 'sound', visible: true },
{ category: 'judgement', visible: true },
{ category: 'calc', visible: true },
{ category: 'variable', visible: true },
{ category: 'func', visible: true },
{ category: 'analysis', visible: true },
{ category: 'ai_utilize', visible: true },
{ category: 'expansion', visible: true },
{ category: 'arduino', visible: false }, { category: category, visible: true }
]);
for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
}
}
Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
Entry.playground.blockMenu._generateCategoryCode(category);
if (options) {
if (options.background) {
$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
if (options.backgroundSize) {
$(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
}
}
if (options.name) {
$(`#entryCategory${category}`)[0].innerText = options.name
}
}
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
Entry.block[blockname] = {
color: color.color,
outerLine: color.outerline,
skeleton: skeleton,
statement: [],
params: params.params,
events: {},
def: {
params: params.def,
type: blockname
},
paramsKeyMap: params.map,
class: _class ? _class : 'default',
func: func,
template: template
}
} // 블록 추가 시작

addBlock('post_commu', '%1 제목과 %2 내용의 글을 엔트리이야기에 올리기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`악용될시`]
},
{
type: 'text',
params: [`이기능삭제`]
},
null
],
map: {
TITLE: 0,
CONTENT: 1
}
}, 'text', (sprite, script) => {confirm("이 작품이 엔트리 이야기에 글을 올릴려고 합니다. 허락하시나요? (허락한 이상 본인에게 책임이 있습니다)")
fetch('https://playentry.org/api/discuss/', {
method: 'POST',
body: `{ "images": [], "category": "free", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
headers: {
'Content-Type': 'application/json'
}
})
return script.callReturn()
}) ////////////0.5(onlythis)//

////////////////////
addBlock('post_qna', '%1 제목과 %2 내용의 글을 묻고답하기에 올리기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`궁금한것이 있어요!`]
},
{
type: 'text',
params: [`악용되면 이기능 삭제`]
},
null
],
map: {
TITLE: 0,
CONTENT: 1
}
}, 'text', (sprite, script) => {confirm("이 작품이 묻고답하기에 글을 올릴려고 합니다. 허락하시나요? (허락한 이상 본인에게 책임이 있습니다)")
fetch('https://playentry.org/api/discuss/', {
method: 'POST',
body: `{ "images": [], "category": "qna", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
headers: {
'Content-Type': 'application/json'
}
})
return script.callReturn()
}) /////////////0.3//

ddBlock('post_qna', '%1 제목과 %2 내용의 글을 묻고답하기에 올리기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`이것을 알려드릴께요!`]
},
{
type: 'text',
params: [`한 번 따라해보세요~`]
},
null
],
map: {
TITLE: 0,
CONTENT: 1
}
}, 'text', (sprite, script) => {confirm("이 작품이 노하우&팁에 글을 올릴려고 합니다. 허락하시나요? (허락한 이상 본인에게 책임이 있습니다)")
fetch('https://playentry.org/ds#!/tips/write', {
method: 'POST',
body: `{ "images": [], "category": "qna", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
headers: {
'Content-Type': 'application/json'
}
})
return script.callReturn()
}) /////////////0.3//
////////////////////
addBlock('finish', '오류 발생시켜서 정지시키기%1', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
null
],
map: {}
}, 'text', (sprite, script) => {
finish()
return script.callReturn()
})
///////////////0.5///

////////////////////
addBlock('likeList', '이 작품 좋아요 목록%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`user.username`]
},
{
type: 'text',
params: ['entry']
},
null
],
map: {
VARNAME: 0,
VALUE: 1
}
}, 'text', async (sprite, script) => {
let res = await fetch(`https://playentry.org/api/project/likes/${Entry.projectId}?noCache=1587602931964&rows=99999999&targetSubject=project&targetType=individual`)
let data = await res.json()
return data
}, 'basic_string_field'); ///////////0.5
////////////////
addBlock('boost_mode', '부스트모드가 켜져있는가? ', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
],
def: [],
map: {}
}, 'text', (sprite, script) => {
if (useWebGL == true) {
return true;
} else {
return false;
}
}, 'basic_boolean_field') ////////////0.5
////////////////
addBlock('mouse', '마우스 우클릭을 했는가? ', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
],
def: [],
map: {}
}, 'text', (sprite, script) => {
$("html").on("mousedown",function(e){
var E=e.originalEvent
if(E.button){
return true;
}else{
return false;
}
})
}, 'basic_boolean_field') ///////////////////////////////////////////////0.6!!!//////////////////
addBlock('didScroll', '스크롤을 하였는가? ', {
}, {
params: [
],
def: [],
map: {},
class: 'scroll'
}, 'text', (sprite, script) => {
var didScroll;
$(window).scroll(function(event){
didScroll = true;
});
setInterval(function() {
if (didScroll) {
hasScrolled();
didScroll = false;
}
}, 250);
function hasScrolled() {
return true;
}
}, 'basic_boolean_field')

//////////////////////////////////////////////////////////////////
addBlock('scrollHandle', '스크롤 방향(위,아래)', {
}, {
params: [],
def: [],
map: {},
class: 'day'
}, 'text', (sprite, script) => {
if (window.addEventListener)
window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function handle(delta) {
var s = delta + ": ";
if (delta < 0) {
return('아래');
}
else {
return('위');
}
}


function wheel(event){
var delta = 0;
if (!event) event = window.event;
if (event.wheelDelta) {
delta = event.wheelDelta/120;
if (window.opera) delta = -delta;
} else if (event.detail) delta = -event.detail/3;
if (delta) handle(delta);
}

}, 'basic_string_field');
///////////////////////////////
//////////////////////////////
addBlock('alert', '%1제목의 alert(경고창) 띄우기 ', {
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
size: 11,
}
],
def: [
{
type: "text",
params: ['스테이크 블럭~']
},
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => {
const value = script.getValue('VALUE', script);
alert(value);
})
///////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////

addBlock('stop_button(click)_start', '%1정지하기 버튼을 클릭했을 때%2', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Indicator',
img: 'block_icon/start_icon_play.svg',
size: 14,
position: {
x: 0,
y: -2,
},
},
{
type: 'Indicator',
size: 11,
}
],
def: [null, null],
class: 'when_stop_button_click'
}, 'text', (sprite, script) => {
Entry.events_.stop.push(function(){
});
}, 'basic_event')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('open_win', '%1창 열기', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: ['https://playentry.org/ws#!/']
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
if (confirm("이 작품이 이창을열려고합니다..\n허용하시겠습니까?\n\n코드 내용: "+value) == true) {
open(value)
} else {
alert("작업이 취소되었습니다.")

///////////////////////////////////////////////////////////////
var blocks = [
    {
        name: 'text_button',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '버튼 제어',
                color: EntryStatic.colorSet.common.TEXT,
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'airblock'
    },
    /////////////////////////////////////////////////////////////////
    {
      name: 'button_click',
      template: '%1 버튼 클릭하기%2',
      skeleton: 'basic',
      color: {
         default: EntryStatic.colorSet.block.default.ANALYSIS
     },
     params: [
         {
             type: 'Dropdown',
             options: [
               ["정지", "stop"],
               // ["일시정지", "pause"],
               ["전체화면", "fullscreen"] //일시정지 기능 제거. Error 수정 후 추가 예정
             ],
             value: "stop"
         },
         {
            type: 'Indicator',
            img: 'block_icon/block_analysis.svg',
            size: 11,
         }
     ],
     def: [
         null
     ],
     map: {
         VALUE: 0
     },
     class: 'buttonclick',
     func: async (sprite, script) => {
         let value = script.getValue("VALUE", script);
         if (value == "stop") {
           Entry.engine.toggleStop()
         // } else if (value == "pause") {
         //   Entry.engine.togglePause()
         } else if (value == "fullscreen") {
           Entry.engine.toggleFullScreen()
         }
      }
    },

      //////////////////////////////////////////////////////////////////////////////

            template: '%1자바스크립트 코드 실행 %2',
      skeleton: 'basic',
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "alert('엔트리')"
        },
        {
          type: "Indicator",
          img: 'block_icon/block_analysis.svg',
          size: '11'
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "problock",
      func: async(sprite, script) => {
        if (confirm("자바스크립트 코드 실행을 허용하시겠습니까?\n\n코드: " + script.getValue("VALUE", script)) == true) {
          eval(script.getValue("VALUE", script))
        }
      }
    },

    {
      name: "fetchpost",
      template: "%1에 %2 올리기 %3",
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string"
        },
        {
          type: "Block",
          accept: "string"
        },
        {
          type: "Indicator",
          img: 'block_icon/block_analysis.svg',
          size: '11'
        }
      ],
      def: [
        {
          type: "text",
          params: ["https://playentry.org/api/discuss/"]
        },
        {
          type: "text",
          params: ['{ "images": [], "category": "free", "title": "안녕하세요!", "content": "에이션입니다 :)", "groupNotice": false }']
        }
      ],
      map: {
        LEFTHAND: 0,
        RIGHTHAND: 1
      },
      class: "problock",
      func: async(sprite, script) => {
        let apiurl = script.getValue("LEFTHAND", script)
        let data = script.getValue("RIGHTHAND", script)

        if (confirm("작품이 post하는 것을 허용하시겠습니까?\n\n코드: " + apiurl + "에 " + data + " 올리기") == true) {
          let res = await fetch(apiurl, { //fetch 코드: thoratica님의 EntBlock 2.1 참고
            method: 'POST',
            body: data,
            headers: {
              'Content-Type': 'application/json'
            }
          })
          blockPOST = await res.json()
          return script.callReturn()
        }
      }
    },

    {
      name: "variable_change",
      template: "자바스크립트 변수 %1을 %2로 바꾸거나 생성하기 %3", //thoratica님 코드 참고
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "user.username"
        },
        {
          type: "Block",
          accept: "string",
          value: "entry"
        },
        {
          type: "Indicator",
          img: "block_icon/block_analysis.svg",
          size: "11"
        }
      ],
      def: [],
      map: {
        NAME: 0,
        CHANGE: 1
      },
      class: "problock",
      func: async(sprite, script) => {
          let name = script.getValue("NAME", script);
          let change = script.getValue("CHANGE", script);

          if (confirm("이 작품이 엔트리의 특정한 변수 값을 변경하려고 합니다.\n허용하시겠습니까?\n\n변경하려는 변수: " + name + "\n해당 변수를 " + change + "로 변경할 것입니다.") == true) {
              eval(`${script.getValue('NAME', script)} = '${script.getValue('CHANGE', script)}'`);
              return script.callReturn();
          } else {
              alert("작업이 취소되었습니다.")
          }
      }
    },

    {
      name: "variable_value",
      template: "%1 자바스크립트 코드의 값",
      skeleton: "basic_string_field",
      color: {
        default: EntryStatic.colorSet.block.default.CALC
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "user.username"
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "problock",
      func: async(sprite, script) => {
        let value = script.getValue("VALUE", script);
        if (confirm("자바스크립트 코드를 실행하는 것을 허용하시겠습니까?\n\n코드: "+value) == true) {
          return eval(value);
        }
      }
    },

    {
      name: "variable_boolean",
      template: "%1 자바스크립트 코드가 참인가?",
      skeleton: "basic_boolean_field",
      color: {
        default: EntryStatic.colorSet.block.default.JUDGE
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "user.username == 'entry'"
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "problock",
      func: async(sprite, script) => {
        let value = script.getValue("VALUE", script);
        if (confirm("자바스크립트 코드를 실행하는 것을 허용하시겠습니까?\n\n코드: "+value) == true) {
          if (eval(value) == true) {
            return true;
          } else {
            return false;
          }
        } else {
          alert("작업이 취소되었습니다.")
        }
      }
    },


]

//블록추가 끝

LibraryCreator.start(blocks, 'API', '스테이크') //원하는 이름을 입력하세요 :)
document.title = "스테이크 블록😍🥰.";

if (window.location.href.indexOf("playentry.org/ws")!= -1) {
  win = window.open("https://ationblock2.netlify.app");
}
