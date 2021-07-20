namespace Program4_4
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.yellow1 = new System.Windows.Forms.RadioButton();
            this.blue1 = new System.Windows.Forms.RadioButton();
            this.red1 = new System.Windows.Forms.RadioButton();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.yellow2 = new System.Windows.Forms.RadioButton();
            this.blue2 = new System.Windows.Forms.RadioButton();
            this.red2 = new System.Windows.Forms.RadioButton();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.yellow1);
            this.groupBox1.Controls.Add(this.blue1);
            this.groupBox1.Controls.Add(this.red1);
            this.groupBox1.Location = new System.Drawing.Point(29, 31);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(143, 102);
            this.groupBox1.TabIndex = 3;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Select the First Color";
            // 
            // yellow1
            // 
            this.yellow1.AutoSize = true;
            this.yellow1.Location = new System.Drawing.Point(26, 68);
            this.yellow1.Name = "yellow1";
            this.yellow1.Size = new System.Drawing.Size(56, 17);
            this.yellow1.TabIndex = 2;
            this.yellow1.TabStop = true;
            this.yellow1.Text = "Yellow";
            this.yellow1.UseVisualStyleBackColor = true;
            // 
            // blue1
            // 
            this.blue1.AutoSize = true;
            this.blue1.Location = new System.Drawing.Point(26, 44);
            this.blue1.Name = "blue1";
            this.blue1.Size = new System.Drawing.Size(46, 17);
            this.blue1.TabIndex = 1;
            this.blue1.TabStop = true;
            this.blue1.Text = "Blue";
            this.blue1.UseVisualStyleBackColor = true;
            // 
            // red1
            // 
            this.red1.AutoSize = true;
            this.red1.Location = new System.Drawing.Point(26, 20);
            this.red1.Name = "red1";
            this.red1.Size = new System.Drawing.Size(45, 17);
            this.red1.TabIndex = 0;
            this.red1.TabStop = true;
            this.red1.Text = "Red";
            this.red1.UseVisualStyleBackColor = true;
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.yellow2);
            this.groupBox2.Controls.Add(this.blue2);
            this.groupBox2.Controls.Add(this.red2);
            this.groupBox2.Location = new System.Drawing.Point(193, 31);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(143, 102);
            this.groupBox2.TabIndex = 4;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Select the Second Color";
            // 
            // yellow2
            // 
            this.yellow2.AutoSize = true;
            this.yellow2.Location = new System.Drawing.Point(26, 68);
            this.yellow2.Name = "yellow2";
            this.yellow2.Size = new System.Drawing.Size(56, 17);
            this.yellow2.TabIndex = 2;
            this.yellow2.TabStop = true;
            this.yellow2.Text = "Yellow";
            this.yellow2.UseVisualStyleBackColor = true;
            // 
            // blue2
            // 
            this.blue2.AutoSize = true;
            this.blue2.Location = new System.Drawing.Point(26, 44);
            this.blue2.Name = "blue2";
            this.blue2.Size = new System.Drawing.Size(46, 17);
            this.blue2.TabIndex = 1;
            this.blue2.TabStop = true;
            this.blue2.Text = "Blue";
            this.blue2.UseVisualStyleBackColor = true;
            // 
            // red2
            // 
            this.red2.AutoSize = true;
            this.red2.Location = new System.Drawing.Point(26, 20);
            this.red2.Name = "red2";
            this.red2.Size = new System.Drawing.Size(45, 17);
            this.red2.TabIndex = 0;
            this.red2.TabStop = true;
            this.red2.Text = "Red";
            this.red2.UseVisualStyleBackColor = true;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(102, 140);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 5;
            this.button1.Text = "Mix";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(183, 140);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 6;
            this.button2.Text = "Exit";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(361, 189);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Name = "Form1";
            this.Text = "Color Mixer";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.RadioButton yellow1;
        private System.Windows.Forms.RadioButton blue1;
        private System.Windows.Forms.RadioButton red1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.RadioButton yellow2;
        private System.Windows.Forms.RadioButton blue2;
        private System.Windows.Forms.RadioButton red2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;

    }
}

