import { Component, OnInit } from '@angular/core';
import { DoubleSelect } from 'src/app/models/DoubleSelect';
import { ItemEduData } from 'src/app/models/ItemEduData';
import { ItemWorkData } from 'src/app/models/ItemWorkData';

@Component({
  selector: 'app-regist-form',
  templateUrl: './app-regist-form.component.html',
  styleUrls: ['./app-regist-form.component.css']
})
export class AppRegistFormComponent implements OnInit {

  // 日期选择
  name = '请选择';
  value = new Date();
  // name和下拉图标是否隐藏
  selected: boolean = true;

  // 生日日期选择
  nameBirth = '请选择';
  valueBirth = new Date();
  selectedBirth: boolean = true;

  nameWork = '请选择';
  valueWork = new Date();
  selectedWork: boolean = true;
  currentDateFormat(date: any, format: string = 'yyyy-mm-dd HH:MM'): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', pad(date.getMonth() + 1))
      .replace('dd', pad(date.getDate()))
      .replace('HH', pad(date.getHours()))
      .replace('MM', pad(date.getMinutes()))
      .replace('ss', pad(date.getSeconds()));
  }

  // 填表日期点击
  onOk(result: Date) {
    this.name = this.currentDateFormat(result, 'yyyy-mm-dd');
    this.value = result;
    this.selected = false;
    console.log("填表" + this.value);
  }

  // 出生日期点击
  onOkBirth(result: Date) {
    this.nameBirth = this.currentDateFormat(result, 'yyyy-mm-dd');
    this.valueBirth = result;
    this.selectedBirth = false;
    console.log("出生" + this.valueBirth);
  }

  onOkWork(result: Date) {
    this.nameWork = this.currentDateFormat(result, 'yyyy-mm-dd');
    this.valueWork = result;
    this.selectWork = false;
    console.log("到岗时间" + this.valueWork);
  }

  // 性别选择 此处用对象
  selectedSex: Boolean = true;
  dbSelects: DoubleSelect[];
  // 是否结婚 此处用变量
  selectMarry: boolean = false;
  // 目前是否在职
  selectWork: boolean = false


  // 教育经历表格
  editEduCache: { [key: string]: { edit: boolean; data: ItemEduData } } = {};
  listOfEduData: ItemEduData[] = [];
  updateEditEduCache(): void {
    this.listOfEduData.forEach(item => {
      this.editEduCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  // 工作经历表格
  editWorkCache: { [key: string]: { edit: boolean; data: ItemWorkData } } = {};
  listOfWorkData: ItemWorkData[] = [];
  updateEditWrokCache(): void {
    this.listOfWorkData.forEach(item => {
      this.editWorkCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  constructor() { }
  ngOnInit() {
    //name和下拉图标是否隐藏
    this.selected = true;
    // 选择是否婚否
    this.dbSelects = [
      { selectKey: 'one', selectValue: true },
      { selectKey: 'two', selectValue: false }
    ];

    // 教育经历表格
    // <td>{{ data.time }}</td>
    // <td>{{ data.graSchool }}</td>
    // <td>{{ data.specialty }}</td>
    // <td>{{ data.detail }}</td>
    let eduData = [];
    for (let i = 0; i < 3; i++) {
      eduData.push({
        id: `${i}`,
        time: ``,
        graSchool: ``,
        specialty: ``,
        detail: ``
      });
    }
    console.log(eduData);
    this.listOfEduData = eduData;
    this.updateEditEduCache();

    // 教育经历表格
    // <!-- id: string;
    // comTime: string;
    // comName: string;
    // function: string;
    // duty:string; -->
    let workData = [];
    for (let i = 0; i < 3; i++) {
      workData.push({
        id: `${i}`,
        comTime: ``,
        comName: ``,
        function: ``,
        duty: ``
      });
    }
    console.log(workData);
    this.listOfWorkData = workData;
    this.updateEditWrokCache();
  }

}
