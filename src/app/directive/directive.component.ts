import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  courses = ['course1', 'course2'];
  viewMode = 'xx';
  canSave: true;

  task = {
    title: 'Finish course by Sunday',
    assignee: null
  };

  topics = [
    { id: 1, name: 'course1', isReadOnly: true },
    { id: 2, name: 'course2', isReadOnly: true },
    { id: 3, name: 'course3', isReadOnly: true }
  ];

  isSelected: true;
  toggle() {
    if (this.viewMode === 'map') {
      this.viewMode = 'list';
    } else {
      this.viewMode = 'map';
    }

    console.log("TEST");
  }

  constructor() { }

  ngOnInit() {
  }

  onAdd(topic: string) {
    if (topic) {
      this.topics.push({ id: 10, name: topic, isReadOnly: true });
    }
  }

  onRemove(topic) {
    let index = this.topics.indexOf(topic);

    if (index !== -1) {
      this.topics.splice(index, 1);
    }
  }

  onEdit(topic) {
    topic.isReadOnly = false;
    console.log(topic);
  }

  updateTopic(topic, newName) {
    let index = this.topics.indexOf(topic);

    if (index !== -1) {
      topic.name = newName;
      topic.isReadOnly = true;
      this.topics[index] = topic;
    }
    console.log(this.topics);
  }

  trackTopic(index, topic) {
    return topic ? topic.id : undefined;
  }

  loadTopics() {
    this.topics = [
      { id: 1, name: 'course1', isReadOnly: true },
      { id: 2, name: 'course2', isReadOnly: true },
      { id: 3, name: 'course3', isReadOnly: true }
    ];
  }

}
