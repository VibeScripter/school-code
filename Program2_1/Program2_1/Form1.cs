﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Program2_1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            label1.Text = "English translation : left";
        }

        private void button2_Click(object sender, EventArgs e)
        {
            label1.Text = "English translation : right";
        }

        private void button3_Click(object sender, EventArgs e)
        {
            label1.Text = "English translation : center";
        }
    }
}
