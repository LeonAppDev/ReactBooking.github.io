import React from 'react';
import Timeline from 'react-calendar-timeline'
import moment from 'moment'

const rooms1 = [
  { id: 1, title: 'Room 1'},
  { id: 2, title: 'Room 2'},
  { id: 3, title: 'Room 3'},
];

const rooms2 = [
  { id: 1, title: 'Room 1'},
  { id: 2, title: 'Room 2'},
  { id: 3, title: 'Room 3'},
  { id: 4, title: 'Room 4'},
  { id: 5, title: 'Room 5'},
];

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start: moment().add(1, 'day').hours(0).minutes(0).seconds(0),
    end: moment().add(4, 'day').hours(6).minutes(0).seconds(0)
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start: moment().add(-1, 'day').hours(0).minutes(0).seconds(0),
    end: moment().add(1, 'day').hours(0).minutes(0).seconds(0)
  },
  {
    id: 3,
    group: 2,
    title: 'item 3',
    start: moment().add(2, 'day').hours(0).minutes(0).seconds(0),
    end: moment().add(3, 'day').hours(0).minutes(0).seconds(0)
  },
];

function CalendarTimeline() {
  const minTime = moment().add(-6, 'months').valueOf()
  const maxTime = moment().add(6, 'moment').valueOf()
  const props = {
    groups: rooms1,
    fixedHeader: 'fixed',
    canMove: true, // defaults
    canResize: true,
    itemsSorted: true,
    itemTouchSendsClick: false,
    stackItems: true,
    itemHeightRatio: 0.75,
    dragSnap: moment.duration(1, 'days').asMilliseconds(),

    defaultTimeStart: moment().add(-7, 'day'),
    defaultTimeEnd: moment().add(7, 'day'),

    maxZoom: moment.duration(2, 'months').asMilliseconds(),
    minZoom: moment.duration(3, 'days').asMilliseconds(),

    keys: {
      groupIdKey: 'id',
      groupTitleKey: 'title',
      itemIdKey: 'id',
      itemTitleKey: 'title',
      itemGroupKey: 'group',
      itemTimeStartKey: 'start',
      itemTimeEndKey: 'end'
    },

    onItemClick: function (item) {
      console.log("Clicked: " + item);
    },

    onItemSelect: function (item) {
      console.log("Selected: " + item);
    },

    onItemContextMenu: function (item) {
      console.log("Context Menu: " + item);
    },


    // this limits the timeline to -6 months ... +6 months
    onTimeChange: function (visibleTimeStart, visibleTimeEnd) {
      if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
        this.updateScrollCanvas(minTime, maxTime)
      } else if (visibleTimeStart < minTime) {
        this.updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart))
      } else if (visibleTimeEnd > maxTime) {
        this.updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime)
      } else {
        this.updateScrollCanvas(visibleTimeStart, visibleTimeEnd)
      }
    }
  }
  return (
    <Timeline
      groups={rooms1}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
      props={props}
    />
  );
}

export default CalendarTimeline;
